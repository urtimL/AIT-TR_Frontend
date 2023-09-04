/*  Необходимо создать объект bankAccount(дебет), представляющий банковский счёт со
    следующими свойствами:
    1. accountNumber: 123456789 (для номера счёта);
    2. accountHolderName для имени владельца счёта;
    3. balance для баланса;
    4. deposit() для описания действия по добавлению денег на счёт;
    5. withdraw() для описания действия по снятию денег со счёта;
    6. checkBalance() для проверки баланса. */ 



const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: 'John Smith',
    balance: 0,
    
    deposit: function (moneyOrder) {
        if(moneyOrder <= 0) {
            return false;
        }
        
        this.balance += moneyOrder;

        return true;
    },
    
    withdraw: function (moneyOrder) {
        if(moneyOrder <= 0 || this.balance < moneyOrder) {
            return false;
        }
        
        this.balance -= moneyOrder;

        return true;
    },
    
    checkBalance: function () {
        console.log(`Your balance is: ${this.balance}`);
    },
};