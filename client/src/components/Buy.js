import { ethers } from "ethers";
const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction complete");
  };
  return (
    <>
      <form onSubmit={buyChai}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter your name"
        ></input>
        <label>Message</label>
        <input
          type="text"
          id="message"
          placeholder="Please enter your message"
        ></input>
        <button type="submit">Pay</button>
      </form>
    </>
  );
};

export default Buy;
