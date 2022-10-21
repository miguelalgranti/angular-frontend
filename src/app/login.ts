export interface login {
  email: string;
  password: string;

  constructor(private datosPortfolio:PortfolioService) {

  login() {
   return  console.log(this.email);
    console.log(this.password);
  }
}