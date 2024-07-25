import React from "react";
import sonia from "../../../public/Images/sonia.webp";
import john from "../../../public/Images/john.webp";
import sumati from "../../../public/Images/sumati.webp";
import collan from "../../../public/Images/collan.webp";
import Image from "next/image";
const SectionSeven = () => {
  return (
    <div className="container-seven">
      <div className="row">
        <div className="col-6">
          <h1>What our Client say about us</h1>
          <p>
            The opinion of our client’s is very important to us. Our team is
            constantly making efforts to improve the quality of our services.
            Join us!
          </p>
          <button type="submit">Read our Success Stories</button>
        </div>
        <div className="col-6">
          <div className="row">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={sonia}
              width={270}
              height={130}
            />
            <Image src={collan} height={30} width={30} alt="collan" />

            <p>
              Words cannot express how impressed I am with Webguruz. I would go
              so far as to say, you set a bench
            </p>
          </div>

          <div className="row">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={sumati}
              width={270}
              height={130}
            />
            <Image src={collan} height={30} width={30} alt="collan" />

            <p>
              I am really satisfied with their work so far, the lay-out of my
              website is beautiful. I feel I am receiving more than what I am
              paying for. But what I love most, is that Jass and his team are
              not just doing their job, you know, they are really engaged and
              truly have a heart for their clients. I know I will have a life
              time relationship working with Webguruz Technologies. Thank you
              for your outstanding work!.
            </p>
            <span>Tina</span>
          </div>

          <div className="row">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={john}
              width={270}
              height={130}
            />
            <Image src={collan} height={30} width={30} alt="collan" />

            <p>
              Unique idea with unique service. Webguruz not only created a
              wonderful website but also directed thr
              <span> Mark Anderson</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
