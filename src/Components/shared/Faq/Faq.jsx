const Faq = () => {
  return (
    <div id="faq" className=" mt-20">
      <h1 className="font-bold text-3xl text-center md:text-5xl">
        Frequently asked questions
      </h1>
      <p className="md:text-xl font-medium mt-3 text-center text-[#667085]">
        Everything you need to know about the product and billing.
      </p>
      <div className="max-w-[768px] mx-auto mt-20 px-2 md:px-8 lg:px-0">
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Is there a free trial available?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I change my plan later?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              {" "}
              Absolutely! You can upgrade, downgrade, or switch your plan at any
              time. Simply log in to your account, go to the billing section,
              and you&lsquo;ll find the options to modify your subscription
              according to your needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is your cancellation policy?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              We understand that circumstances may change. If you decide to
              cancel your subscription, you can do so at any time. Your access
              will continue until the end of the current billing period, and you
              won&lsquo;t be charged thereafter.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can other info be added to an invoice?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              Certainly! Our invoicing system allows you to add additional
              information to invoices to meet your specific needs. You can
              include extra details, notes, or special instructions before
              finalizing and sending the invoice to ensure it aligns perfectly
              with your requirements.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How does billing work?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              Billing is based on your chosen subscription plan and is typically
              processed on a monthly basis. If you&lsquo;re on a free trial, you
              won&lsquo;t be billed during the trial period. We&lsquo;ll
              automatically charge the payment method on file at the beginning
              of each billing cycle unless you make changes to your plan or
              cancel before the renewal date.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-y">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I change my account email?
          </div>
          <div className="collapse-content">
            <p className="text-[#6B7280]">
              To update your account email, log in to your account and navigate
              to the account settings or profile section. There, you should find
              an option to change your email address. Follow the prompts to
              enter the new email, verify the change, and ensure you have access
              to the updated email for future communications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
