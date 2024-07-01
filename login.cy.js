describe('Login API Tests', () => {
    it('should log in a user successfully', () => {
      cy.request({
        method: 'POST',
        url: 'https://vigil.lendsqr.com/pecunia/api/v2/auth/admin/login',
        body: {
          email: 'olaniyiakanji10@gmail.com',
          password: 'JustLoan@10!'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message','Enter 2FA token to Authenticate')
      })
    })

   

    it('should not log in a user with invalid password', () => {
        cy.request({
          method: 'POST',
          url: 'https://vigil.lendsqr.com/pecunia/api/v2/auth/admin/login',
          failOnStatusCode: false,
          body: {
            email: 'olaniyiakanji10@gmail.com',
            password: 'InvalidPassword'
          }
        }).then((response) => {
          expect(response.status).to.eq(401)
          expect(response.body).to.have.property('error', 'Incorrect login credentials')
        })
    
  })
})