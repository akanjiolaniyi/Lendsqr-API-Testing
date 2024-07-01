describe('Retrieve API Keys Tests', () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njc0NywiaXNfYWRtaW4iOnRydWUsImlwIjoiMTAyLjg5LjIzLjEyNiIsInJvbGUiOnsibmFtZSI6IlN1cGVyIEFkbWluIiwic2x1ZyI6InN1cGVyX2FkbWluIn0sImN1cnJlbnRfb3JnYW5pemF0aW9uIjp7ImlkIjo1Mjc4LCJzbHVnIjpudWxsLCJ0eXBlX2lkIjo1LCJ0eXBlIjoiY29uc3VtZXIiLCJuYW1lIjoiTGVuZE1vbmV5IiwicHJpbWFyeV9lbWFpbCI6Im9sYW5peWlha2FuamkxMEBnbWFpbC5jb20iLCJzdXBwb3J0X2VtYWlsIjpudWxsLCJsb2dvX3VybCI6Imh0dHBzOi8vZG9jdW1lbnRzLmxlbmRzcXIuY29tL2RlZmF1bHQvMmIxNDk4Yzc3OWM5N2RhNTM2NjMxYjZlMDBlNjE4OGRmMWI4NmMyZmZjMzk3YjE5NTkyMTEwMjE1YmFmMDI4NmNiODUzM2NmODZiMTFhOGM3OGI0OTJjNjY2Y2YzYTA1NmMyYWI5OGFiMDAxMGRiYmRjNWViNjk0Y2MxYjY0N2MuanBnIiwidGllciI6MSwic3RhdHVzIjoicGVuZGluZyIsImNvdW50cnkiOiJOR0EiLCJjdXJyZW5jeSI6Ik5HTiJ9LCJyZWdpb24iOiJMYWdvcyIsInNlc3Npb25faWQiOiIyMDI0MDYyOTE3NDUwNy0wMDUyNzgtQUQ2NzQ3LUxTUS1zSjFzNE9YQWNMIiwiaWF0IjoxNzE5NjgzMTA3LCJleHAiOjE3MTk2OTAzMDcsImlzcyI6ImxlbmRzcXIuY29tIn0.4yvzeq9yCO5znpaJX3RuGwXa_pk5hDiaMq3-WjCnGb0"
  
    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://vigil.lendsqr.com/pecunia/api/v2/auth/admin/login',
        body: {
          email: 'olaniyiakanji10@gmail.com',
          password: 'JustLoan@10'
        }
      }).then((response) => {
        token = response.body.token;
      })
    })
  
    it('should retrieve API keys with a valid token', () => {
      cy.request({
        method: 'GET',
        url: 'https://vigil.lendsqr.com/pecunia/api/v1/admin/adjutor/apps?page=1&limit=5',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'success')
       
        
      })
    })
    it('should not retrieve API keys with missing token', () => {
        cy.request({
          method: 'GET',
          url: 'https://vigil.lendsqr.com/pecunia/api/v1/admin/adjutor/apps?page=1&limit=5',
          headers: {
            Authorization: `Bearer `
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401)
          expect(response.body).to.have.property('error', 'unauthorized access')
        })
      })
  })