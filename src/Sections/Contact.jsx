import Section from "../Components/Section";
import Swal from "sweetalert2";
import Button from "../Components/Button";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccf5871e-d129-455a-b99c-96613961b7de");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sent",
        text: "Message Sent Successfully.",
        icon: "success",
      });
    }
  };
  return (
    <Section id="contact">
      <div className="container grey-container">
        <div className="flex items-center justify-center flex-col">
          <h2>Contact Me</h2>
          <div className="hidden xl:block m-10 xl:mt-0">
            <CircleGrid
              position="relative"
              color="rgb(244 244 245)"
              size="250px"
              zIndex={1}
            />
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full max-w-[450px] flex flex-col justify-center p-4 "
        >
          <label for="name">Full Name</label>
          <input type="text" name="name" required />
          <label for="email">Email</label>
          <input type="email" name="email" required />
          <label for="message">Message</label>
          <textarea name="message" rows={5}></textarea>
          <Button
            type="submit"
            className={`text-center mx-0 lg:mx-auto `}
            white
          >
            Send
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
