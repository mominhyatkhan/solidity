// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity 0.6.9;


contract Delance{
    
    address payable public freelancer;
    address payable public employer;
    bool locked = false;
    uint public deadline;
    // uint public price;
    uint256 public balance;
    struct Request {
        string title;
        uint256 amount;
        bool locked;
        bool paid;
    }
    Request[] public requests;

    event RequestPaid(address receiver, uint256 amount);

    constructor(address payable _freelancer,uint _deadline) public payable{
        employer = msg.sender;
        freelancer = _freelancer;
        deadline = _deadline;
        balance = msg.value;
    }

    function payRequest(uint256 _index) public onlyFreelancer {
        
        require(!locked, "Reentrant detected!");
        
        Request storage request = requests[_index];
        require(!request.locked, "Request is locked");
        require(!request.paid, "Already paid");
        
        locked = true;
        
        (bool success, bytes memory transactionBytes) = freelancer.call{value:request.amount}("");
        
        require(success, "Transfer failed.");
        
        request.paid = true;
        
        locked = false;
        
        emit RequestPaid(msg.sender, request.amount);
    }

    receive() payable external {
        balance += msg.value;
    }
    function show() external view returns (uint256)
    {
        return balance;
    }


    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only Freelancer!");
        _;
    }

    event RequestCreated(string title, uint256 amount, bool locked, bool paid);

    function createRequest(string memory _title, uint256 _amount) public
    {
        require(msg.sender == freelancer);
        Request memory request = Request({
            title: _title,
            amount: _amount,
            locked: true,
            paid: false
        });
        requests.push(request);
        emit RequestCreated(_title, _amount, request.locked,  
        request.paid);
    }

    function getAllRequests() public view returns (Request[] memory) {
        return requests;
    }

    event RequestUnlocked(bool locked);
 
    function unlockRequest(uint256 _index) public onlyEmployer(){
        Request storage request = requests[_index];
        require(request.locked, "Already unlocked");
        request.locked = false;
        emit RequestUnlocked(request.locked);
    }

    modifier onlyEmployer(){
        require(msg.sender == employer, "Permission denied");
        _;
    }

    function withdraw(uint amount, address payable _freelancer) public {
        require(_freelancer == freelancer);
        require(amount<=balance, "Insuffiecient Balance");
        _freelancer.transfer(amount);
        balance-=amount;
    }
    

    // function get() public view returns(string memory) {
    //     return value;
    // }
    // function set(string memory _value) public {
    //     value = _value;
    // }

    //for freelancers account
    // fallback() external payable {
    //     uint256 value = msg.value; 
    // }

    // function pay() public payable {
    //     uint256 balance = msg.value;
    //     //if value > o {}
    //     // Do some validation to make sure value is greater than 0
    //     // .
    //     // .
    //     // .
    //     // Buy asset
    // }


}