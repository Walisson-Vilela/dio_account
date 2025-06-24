export abstract class DioAccount {
    private name: string;
    accountNumber: number;
    balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = () => {
        console.log('Voce depositou')
    }

    withdraw = () => {
        console.log('Voce sacou')
    }

    getBalance = () => {
        console.log(this.balance)
    }

    setName = (name: string) : void => {
        this.name = name;
        console.log('Nome alterado com sucesso!')
    }

    getName = () : string => {
        return this.name;
    }
}