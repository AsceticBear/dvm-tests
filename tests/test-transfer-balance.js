const expect = require('chai').expect;
const Web3 = require('web3');

const web3 = new Web3('http://localhost:9933');

const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
// substrate: '5ELRpquT7C3mWtjeqFMYqgNbcNgWKSr3mYtVi1Uvtc2R7YEx';
const addressTo = '0xB90168C8CBcd351D069ffFdA7B71cd846924d551';
// substrate: '5ELRpquT7C3mWtjerqkd7LCXtabjBUBpnoAhmc1bs9rq8PG1';
const privKey =
    '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';


describe('Test Transfer Balance', function () {

    it('Get accounts balance before transfer', async function () {
        const balanceFrom = web3.utils.fromWei(
            await web3.eth.getBalance(addressFrom),
            'ether'
        );
        const balanceTo = await web3.utils.fromWei(
            await web3.eth.getBalance(addressTo),
            'ether'
        );

        expect(balanceFrom).to.be.equal('123.45678900000000009');
        expect(balanceTo).to.be.equal('100');
    });

    it("Transfer balance", async function () {
        const createTransaction = await web3.eth.accounts.signTransaction(
            {
                from: addressFrom,
                to: addressTo,
                value: web3.utils.toWei('10', 'ether'),
                gas: '5000000000',
            },
            privKey
        );

        const createReceipt = await web3.eth.sendSignedTransaction(
            createTransaction.rawTransaction
        );

        // expect(createReceipt.transactionHash).to.be.equal("-0x8e2d28db17a285c9203b0b290ba4eac5216b4867e70da45eecdf05cc4ddc02ea");
    }).timeout(10000);

    it('Get accounts balance after transfer', async function () {
        const balanceFrom = web3.utils.fromWei(
            await web3.eth.getBalance(addressFrom),
            'ether'
        );
        const balanceTo = await web3.utils.fromWei(
            await web3.eth.getBalance(addressTo),
            'ether'
        );

        expect(balanceFrom).to.be.equal('113.45678900000000009');
        expect(balanceTo).to.be.equal('110');
    });
});