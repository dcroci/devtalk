import ContactForm from "@/components/home/ContactForm";

function ContactPage() {
  return (
    <main className="col-span-full">
      <h1 className="mb-2 text-center text-[30px] font-semibold text-almostWhite">
        Contact Us
      </h1>
      <p className="mx-auto w-2/3 leading-relaxed text-medGray md:w-2/4 ">
        {
          "Can't find a language you're looking for? Website suddenly crashed? Whatever it is, feel free to send us an email and let us know about it."
        }
      </p>
      <ContactForm />
    </main>
  );
}

export default ContactPage;
