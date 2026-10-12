import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () =>
    pageHead({
      title: "Privacy Policy | JP Mortgage Solutions",
      description:
        "Privacy Policy for Jodi Pyle Limited, trading as JP Mortgage Solutions. How we collect, use and keep your personal data, and how to contact us.",
      path: "/privacy-policy",
    }),
});

function PrivacyPolicy() {
  return (
    <section className="bg-bg">
      <Container className="py-16 md:py-20">
        <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-fg">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p>
            This is the privacy notice of Jodi Pyle Limited, trading as JP Mortgage
            Solutions. In this document, “we” or “us” refers to Jodi Pyle Limited.
          </p>
          <p>
            Jodi Pyle Limited is registered in England and Wales under company
            number 11048520. Registered office: 18 St. James Road, Watford, England,
            WD18 0EA.
          </p>
          <p>
            JP Mortgage Solutions is a trading style of Jodi Pyle Limited, which is
            an Appointed Representative of Stonebridge Mortgage Solutions Ltd, which
            is authorised and regulated by the Financial Conduct Authority.
          </p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>
            <br />
            Tel:{" "}
            <a className="underline" href="tel:07763686547">
              07763 686547
            </a>
          </p>
          <p>
            This is a notice to tell you our policy about all information that we
            record about you. It covers both information that could identify you
            and information that could not.
          </p>
          <p>
            We are committed to protect your privacy and confidentiality. We
            understand that all users of our website need to know that their data
            will not be used for any purpose unintended by them and will not
            accidentally fall into the hands of a third party. Our policy is both
            specific and strict. It complies with UK law, including the Data
            Protection Act 2018. If you think our policy falls short of your
            expectations or that we are failing to abide by our policy, do please
            tell us.
          </p>
          <p>
            We regret that if there are one or more points below with which you are
            not happy, your only recourse is to leave our website immediately.
          </p>
          <p>
            Except as set out below, we do not share, or sell, or disclose to a
            third party, any personally identifiable information collected at this
            site.
          </p>
          <p>
            Here is a list of the information we collect from you, either through
            our website or because you give it to us in some other way, and why it
            is necessary to collect it:
          </p>

          <h2 className="pt-2 text-2xl font-bold">
            Basic identification and contact information
          </h2>
          <p>This information is used:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>to provide you with the services which you request;</li>
            <li>for verifying your identity for security purposes;</li>
            <li>for marketing our services and products.</li>
          </ul>
          <p>
            Information which does not identify any individual may be used in a
            general way by us or third parties, to provide class information, for
            example relating to demographics or usage of a particular page or
            service.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Market place information</h2>
          <p>
            When we obtain information from you specifically to enable you to use
            or buy a service offered on our website by some other person, we assume
            that in giving us your information, you are also giving us permission
            to pass it to the relevant person.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Your domain name and email address</h2>
          <p>
            Your domain name and email address are recognised by our servers and
            the pages that you visit are recorded. We shall not under any
            circumstances divulge your email address to any person who is not an
            employee or contractor of ours and who does not need to know, either
            generally or specifically.
          </p>
          <p>This information is used:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>to correspond with you or deal with you as you expect;</li>
            <li>
              in a collective way not referable to any individual, for the purpose
              of quality control and improvement of our site;
            </li>
            <li>to send you news about the services to which you have signed up;</li>
            <li>to tell you about other of our services.</li>
          </ul>

          <h2 className="pt-2 text-2xl font-bold">Information you post on our website</h2>
          <p>
            Information you send to us by posting a message is stored on our
            servers. We do not specifically use that information except to allow it
            to be read, but you will see that we reserve a right to use it in any
            way we decide.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Website usage information</h2>
          <p>
            We may use software embedded in our website (such as JavaScript) to
            collect information about which pages you view and how you reach them,
            what you do when you visit a page, the length of time you remain on the
            page, and how we perform in providing content to you. This data is not
            personally identifiable. It is collected by us to improve the service
            we provide. We do not pass this data to any third party.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Business and personal information</h2>
          <p>
            This includes all information given to us in the course of your
            business and ours, such as information you give us in your capacity as
            our client. We undertake to preserve the confidentiality of the
            information and of the terms of our relationship. It is not used for
            any other purpose. We expect you to reciprocate this policy.
          </p>
          <p>
            We keep information which forms part of our business record for a
            minimum of six years. That is because we may need it in some way to
            support a claim or defence in court. That is also the period within
            which our tax collecting authorities may demand to know it.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Third party advertising</h2>
          <p>
            Third parties may advertise on our website. In doing so, those parties,
            their agents or other companies working for them may use technology
            that automatically collects your IP address when they send an
            advertisement that appears on our site to your browser. They may also
            use other technology such as cookies or JavaScript to personalise the
            content of, and to measure the performance of, their adverts. We do not
            have control over these technologies or the data that these parties
            obtain. Accordingly, this privacy notice does not cover the information
            practices of these third parties.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Cookies</h2>
          <p>
            We use cookies on our website. Please see our{" "}
            <Link to="/cookie-policy" className="font-semibold underline">
              Cookie Policy
            </Link>{" "}
            for more information on how cookies work and how we use them.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Calling our office</h2>
          <p>
            When you call our office, we may collect Calling Line Identification
            (CLI) information. We use this information to help improve the
            efficiency and effectiveness of our help line. We never pass this
            information to third parties.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Emailing us</h2>
          <p>
            Email is not always a secure mode of communication and we provide no
            guarantee that confidentiality of the information provided in an email
            will be maintained during transmission.
          </p>
          <p>
            We will never send you an email asking you to transfer deposit funds.
            If you ever receive an email from us which provides bank account
            details for you to transfer money, please speak to us on{" "}
            <a className="underline" href="tel:07763686547">
              07763 686547
            </a>{" "}
            to confirm it is genuine.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Sending a message to us</h2>
          <p>
            When you send a message, we collect the data you have given to us in
            that message in order to obtain confirmation that you are entitled to
            receive the information and to provide to you the information you need.
          </p>
          <p>
            We record your request and our reply to increase the efficiency of our
            organisation. We may keep personally identifiable information associated
            with your message, such as your name or email address.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Complaining</h2>
          <p>
            When we receive a complaint, we record all the information you have
            given to us. We use that information to resolve your complaint. If your
            complaint reasonably requires us to contact some other person, we may
            decide to give to that other person some of the information contained
            in your complaint. We do this as infrequently as possible, but it is a
            matter for our sole discretion as to whether we do give information,
            and, if we do, what that information is.
          </p>
          <p>
            We may also compile statistics showing information obtained from this
            source to assess the level of service we provide, but not in a way that
            could identify you or any other person.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Job application and employment</h2>
          <p>
            If you send us information in connection with a job application, we may
            keep it for up to three years in case we decide to contact you at a
            later date.
          </p>
          <p>
            If we employ you, we collect information about you and your work from
            time to time throughout the period of your employment. This information
            will be used only for purposes directly relevant to your employment.
            After your employment has ended, we will keep your file for six years
            before destroying or deleting it.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Content you provide to us</h2>
          <p>
            If you provide information to us with a view to it being read, copied,
            downloaded or used by other people, we accept no responsibility for
            what that third party may do with it. It is up to you to satisfy
            yourself about the privacy level of every person who might see your
            information. If it is available to all the world, you have no control
            whatsoever as to how it is used.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Marketing information</h2>
          <p>
            With your permission we pass your email address and name to selected
            associates whom we consider may provide services or products you would
            find useful. You may opt out of this service at any time by instructing
            us at{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>
            .
          </p>

          <h2 className="pt-2 text-2xl font-bold">Information we obtain from third parties</h2>
          <p>
            Although we do not disclose your personal information to any third
            party (except as set out in this notice), we do receive data which is
            indirectly made up from your personal information, from software
            services such as website analytics and others. No such information is
            identifiable to you.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Disclosure to government and their agencies</h2>
          <p>
            We are subject to the law like everyone else. We may be required to
            give information to legal authorities if they so request or if they
            have the proper authorisation such as a search warrant or court order.
          </p>

          <h2 className="pt-2 text-2xl font-bold">
            Review or update personally identifiable information
          </h2>
          <p>
            At any time, you may review or update the personally identifiable
            information that we hold about you by contacting us at the address
            below. To better safeguard your information, we will also take
            reasonable steps to verify your identity before granting access or
            making corrections to your information.
          </p>
          <p>
            Jodi Pyle Limited
            <br />
            18 St. James Road
            <br />
            Watford
            <br />
            England
            <br />
            WD18 0EA
          </p>

          <h2 className="pt-2 text-2xl font-bold">Sale of your personal information</h2>
          <p>
            Except as specified above, we do not rent, sell or otherwise disclose
            any of your information to any person outside our business.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Data may be processed outside the UK</h2>
          <p>
            Our website may be hosted in the UK or elsewhere. We also use
            outsourced services in countries outside the UK from time to time in
            other aspects of our business. Accordingly, data obtained within the UK
            may be processed outside the UK and data obtained in any other country
            may be processed within or outside that country.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Compliance with the law</h2>
          <p>
            This privacy policy has been compiled so as to comply with the law of
            every jurisdiction in which we aim to do business. If you think it
            fails to satisfy the law of your country, we should like to hear from
            you, but ultimately it is your choice as to whether you wish to use our
            website.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Removal of your information</h2>
          <p>
            If you wish us to remove personally identifiable information from our
            website, you may contact us at{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>
            . To better safeguard your information, we will also take reasonable
            steps to verify your identity before granting access or making
            corrections to your information.
          </p>
          <p>
            You have the right to complain to the Information Commissioner’s
            Office:{" "}
            <a
              className="underline"
              href="https://ico.org.uk"
              target="_blank"
              rel="noreferrer"
            >
              https://ico.org.uk
            </a>
            .
          </p>

          <h2 className="pt-2 text-2xl font-bold">Jurisdiction</h2>
          <p>
            Disputes relating to the use of our website will be subject to the
            jurisdiction of the English courts.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Copyright</h2>
          <p>
            All material on our website which has been created by us is subject to
            copyright under UK law and we reserve all rights associated with that
            content. Parts of the website may be downloaded for personal use only.
            You are not entitled to reproduce or modify content subject to
            copyright, in whole or in part, for any commercial use whatsoever,
            without our prior written permission.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Accuracy of website content</h2>
          <p>
            Although we endeavour to ensure that all of the information on our
            website is accurate and up to date, we do not guarantee that that is
            the case.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Financial advice</h2>
          <p>
            No information on our website constitutes financial advice. If you
            require financial advice, please contact us.
          </p>

          <p>
            If you have any questions regarding this privacy policy, please contact
            us at{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>
            .
          </p>
        </article>
      </Container>
    </section>
  );
}