describe('Signup API Tests', () => {
    it('should sign up a new user successfully', () => {
      cy.request({
        method: 'POST',
        url: 'https://vigil.lendsqr.com/pecunia/api/v2/onboard',
        body: {
          name: "olaniyiakanji",
          email: "olaniyiakanji10@gmail.com",
          phone_number: "+2348181006856",
          business_name:"CapitalCash",
          locale: "Nigeria",
          rc_number:"1234567",
          password: "JustLoan@10"
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'Signup successful')
      })
    })
    it('should show an error when signing up with an existing email', () => {
        cy.request({
          method: 'POST',
          url: 'https://vigil.lendsqr.com/pecunia/api/v2/onboard',
          failOnStatusCode: false,
          body: {
            name: "olaniyiakanji",
          email: "olaniyiakanji10@gmail.com",
          phone_number: "+2348181006856",
          business_name:"CapitalCash",
          locale: "Nigeria",
          rc_number:"1234567",
          password: "JustLoan@10"
          }
        }).then((response) => {
          expect(response.status).to.eq(409);
          expect(response.body).to.have.property('error', 'Email already registered');
        });
      });
      
  })