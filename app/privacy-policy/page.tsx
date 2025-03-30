import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { appName, lastUpdated, supportEmail } from "@/lib/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Calculus",
  description:
    "Read our privacy policy to understand how we protect your personal information and your rights while using the Calculus app.",
  keywords: "privacy policy, personal data, user privacy, app privacy",
  openGraph: {
    title: "Privacy Policy - Calculus",
    description:
      "Read our privacy policy to understand how we protect your personal information and your rights while using the Calculus app.",
    images: ["/og-image.jpg"],
    url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/privacy-policy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Calculus",
    description:
      "Read our privacy policy to understand how we protect your personal information and your rights while using the Calculus app.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicy() {
  return (
    <Container className="py-10">
      <Card>
        <CardContent className="space-y-6 p-6">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p>Last updated: {lastUpdated}</p>
          <p>
            Thank you for using <strong>{appName}</strong>. Your privacy is
            important to us. This Privacy Policy describes how we collect, use,
            and protect information related to the use of the App.
          </p>

          <h2 className="text-xl font-semibold">1. Data Collection</h2>
          <p>
            <strong>Calculus</strong> does not require registration and does not
            collect personally identifiable user data.
          </p>
          <p>
            The App uses a third-party API to retrieve exchange rates. The use
            of this API may involve collecting anonymous data, such as IP
            addresses or request-related data, according to the API
            provider&apos;s policies.
          </p>

          <h2 className="text-xl font-semibold">2. Use of Information</h2>
          <p>
            The automatically collected information from the API is used
            exclusively to provide updated exchange rates and enhance user
            experience.
          </p>

          <h2 className="text-xl font-semibold">3. Data Sharing</h2>
          <p>
            We do not share, sell, or transfer personal data to third parties,
            except for the information provided to the currency exchange service
            for the proper functioning of the App.
          </p>

          <h2 className="text-xl font-semibold">4. Security</h2>
          <p>
            We implement appropriate security measures to protect information
            transmitted through the App. However, no method of data transmission
            is entirely secure.
          </p>

          <h2 className="text-xl font-semibold">5. GDPR Compliance</h2>
          <p>
            As a user within the European Economic Area (EEA), you have the
            right to access, rectify, or delete your data, even though{" "}
            <strong>Calculus</strong> does not store personal data. If you have
            any concerns, please contact us.
          </p>

          <h2 className="text-xl font-semibold">
            6. Changes to Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Please check
            this page periodically for any changes.
          </p>

          <p>If you have any questions, contact us at {supportEmail}.</p>
        </CardContent>
      </Card>
    </Container>
  );
}

{
  /* Main Content */
}
{
  /* <main className="container py-12">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">
      Privacy Policy for Calculus
    </h1>
    <p className="text-gray-500 dark:text-gray-400 mb-8">
      Last updated: March 28, 2025
    </p>

    <Card className="mb-8">
      <CardContent className="pt-6 prose dark:prose-invert max-w-none">
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use
          the Service and tells You about Your privacy rights and how the
          law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By
          using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy. This Privacy
          Policy has been created with the help of the Privacy Policy
          Generator.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Interpretation and Definitions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Interpretation</h3>
          <p className="text-gray-500 dark:text-gray-400">
            The words of which the initial letter is capitalized have
            meanings defined under the following conditions. The following
            definitions shall have the same meaning regardless of whether
            they appear in singular or in plural.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Definitions</h3>
          <p className="text-gray-500 dark:text-gray-400">
            For the purposes of this Privacy Policy:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 dark:text-gray-400">
            <li>
              <span className="font-medium">Account</span> means a unique
              account created for You to access our Service or parts of
              our Service.
            </li>
            <li>
              <span className="font-medium">Affiliate</span> means an
              entity that controls, is controlled by or is under common
              control with a party, where &ldquo;control&ldquo; means
              ownership of 50% or more of the shares, equity interest or
              other securities entitled to vote for election of directors
              or other managing authority.
            </li>
            <li>
              <span className="font-medium">Application</span> refers to
              Calculus, the software program provided by the Company.
            </li>
            <li>
              <span className="font-medium">Company</span> (referred to as
              either &ldquo;the Company&ldquo;, &ldquo;We&ldquo;,
              &ldquo;Us&ldquo; or &ldquo;Our&ldquo; in this Agreement)
              refers to Calculus.
            </li>
            <li>
              <span className="font-medium">Country</span> refers to:
              Italy
            </li>
            <li>
              <span className="font-medium">Device</span> means any device
              that can access the Service such as a computer, a cellphone
              or a digital tablet.
            </li>
            <li>
              <span className="font-medium">Personal Data</span> is any
              information that relates to an identified or identifiable
              individual.
            </li>
            <li>
              <span className="font-medium">Service</span> refers to the
              Application.
            </li>
            <li>
              <span className="font-medium">Service Provider</span> means
              any natural or legal person who processes the data on behalf
              of the Company. It refers to third-party companies or
              individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the
              Company in analyzing how the Service is used.
            </li>
            <li>
              <span className="font-medium">Usage Data</span> refers to
              data collected automatically, either generated by the use of
              the Service or from the Service infrastructure itself (for
              example, the duration of a page visit).
            </li>
            <li>
              <span className="font-medium">You</span> means the
              individual accessing or using the Service, or the company,
              or other legal entity on behalf of which such individual is
              accessing or using the Service, as applicable.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Collecting and Using Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Types of Data Collected</h3>

          <h4 className="text-sm font-medium mt-4 mb-2">Personal Data</h4>
          <p className="text-gray-500 dark:text-gray-400">
            While using Our Service, We may ask You to provide Us with
            certain personally identifiable information that can be used
            to contact or identify You. Personally identifiable
            information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-500 dark:text-gray-400">
            <li>Usage Data</li>
          </ul>

          <h4 className="text-sm font-medium mt-4 mb-2">Usage Data</h4>
          <p className="text-gray-500 dark:text-gray-400">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Usage Data may include information such as Your Device&apos;s
            Internet Protocol address (e.g. IP address), browser type,
            browser version, the pages of our Service that You visit, the
            time and date of Your visit, the time spent on those pages,
            unique device identifiers and other diagnostic data.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            When You access the Service by or through a mobile device, We
            may collect certain information automatically, including, but
            not limited to, the type of mobile device You use, Your mobile
            device unique ID, the IP address of Your mobile device, Your
            mobile operating system, the type of mobile Internet browser
            You use, unique device identifiers and other diagnostic data.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            We may also collect information that Your browser sends
            whenever You visit our Service or when You access the Service
            by or through a mobile device.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-2">Use of Your Personal Data</h3>
          <p className="text-gray-500 dark:text-gray-400">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 dark:text-gray-400">
            <li>
              To provide and maintain our Service, including to monitor
              the usage of our Service.
            </li>
            <li>
              To manage Your Account: to manage Your registration as a
              user of the Service. The Personal Data You provide can give
              You access to different functionalities of the Service that
              are available to You as a registered user.
            </li>
            <li>
              For the performance of a contract: the development,
              compliance and undertaking of the purchase contract for the
              products, items or services You have purchased or of any
              other contract with Us through the Service.
            </li>
            <li>
              To contact You: To contact You by email, telephone calls,
              SMS, or other equivalent forms of electronic communication,
              such as a mobile application&apos;s push notifications
              regarding updates or informative communications related to
              the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable
              for their implementation.
            </li>
            <li>
              To provide You with news, special offers and general
              information about other goods, services and events which we
              offer that are similar to those that you have already
              purchased or enquired about unless You have opted not to
              receive such information.
            </li>
            <li>
              To manage Your requests: To attend and manage Your requests
              to Us.
            </li>
            <li>
              For business transfers: We may use Your information to
              evaluate or conduct a merger, divestiture, restructuring,
              reorganization, dissolution, or other sale or transfer of
              some or all of Our assets, whether as a going concern or as
              part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is
              among the assets transferred.
            </li>
            <li>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing and your experience.
            </li>
          </ul>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            We may share Your personal information in the following
            situations:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 dark:text-gray-400">
            <li>
              With Service Providers: We may share Your personal
              information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </li>
            <li>
              For business transfers: We may share or transfer Your
              personal information in connection with, or during
              negotiations of, any merger, sale of Company assets,
              financing, or acquisition of all or a portion of Our
              business to another company.
            </li>
            <li>
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates
              to honor this Privacy Policy. Affiliates include Our parent
              company and any other subsidiaries, joint venture partners
              or other companies that We control or that are under common
              control with Us.
            </li>
            <li>
              With business partners: We may share Your information with
              Our business partners to offer You certain products,
              services or promotions.
            </li>
            <li>
              With other users: when You share personal information or
              otherwise interact in the public areas with other users,
              such information may be viewed by all users and may be
              publicly distributed outside.
            </li>
            <li>
              With Your consent: We may disclose Your personal information
              for any other purpose with Your consent.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Retention of Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          The Company will retain Your Personal Data only for as long as
          is necessary for the purposes set out in this Privacy Policy. We
          will retain and use Your Personal Data to the extent necessary
          to comply with our legal obligations (for example, if we are
          required to retain your data to comply with applicable laws),
          resolve disputes, and enforce our legal agreements and policies.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period
          of time, except when this data is used to strengthen the
          security or to improve the functionality of Our Service, or We
          are legally obligated to retain this data for longer time
          periods.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Transfer of Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          Your information, including Personal Data, is processed at the
          Company&apos;s operating offices and in any other places where
          the parties involved in the processing are located. It means
          that this information may be transferred to — and maintained on
          — computers located outside of Your state, province, country or
          other governmental jurisdiction where the data protection laws
          may differ than those from Your jurisdiction.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Your consent to this Privacy Policy followed by Your submission
          of such information represents Your agreement to that transfer.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          The Company will take all steps reasonably necessary to ensure
          that Your data is treated securely and in accordance with this
          Privacy Policy and no transfer of Your Personal Data will take
          place to an organization or a country unless there are adequate
          controls in place including the security of Your data and other
          personal information.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Delete Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          You have the right to delete or request that We assist in
          deleting the Personal Data that We have collected about You.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Our Service may give You the ability to delete certain
          information about You from within the Service.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the
          account settings section that allows you to manage Your personal
          information. You may also contact Us to request access to,
          correct, or delete any personal information that You have
          provided to Us.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Please note, however, that We may need to retain certain
          information when we have a legal obligation or lawful basis to
          do so.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Disclosure of Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Business Transactions</h3>
          <p className="text-gray-500 dark:text-gray-400">
            If the Company is involved in a merger, acquisition or asset
            sale, Your Personal Data may be transferred. We will provide
            notice before Your Personal Data is transferred and becomes
            subject to a different Privacy Policy.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Law enforcement</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Under certain circumstances, the Company may be required to
            disclose Your Personal Data if required to do so by law or in
            response to valid requests by public authorities (e.g. a court
            or a government agency).
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Other legal requirements</h3>
          <p className="text-gray-500 dark:text-gray-400">
            The Company may disclose Your Personal Data in the good faith
            belief that such action is necessary to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
            <li>Comply with a legal obligation</li>
            <li>
              Protect and defend the rights or property of the Company
            </li>
            <li>
              Prevent or investigate possible wrongdoing in connection
              with the Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the
              public
            </li>
            <li>Protect against legal liability</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Security of Your Personal Data</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          The security of Your Personal Data is important to Us, but
          remember that no method of transmission over the Internet, or
          method of electronic storage is 100% secure. While We strive to
          use commercially acceptable means to protect Your Personal Data,
          We cannot guarantee its absolute security.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Children&apos;s Privacy</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          Our Service does not address anyone under the age of 13. We do
          not knowingly collect personally identifiable information from
          anyone under the age of 13. If You are a parent or guardian and
          You are aware that Your child has provided Us with Personal
          Data, please contact Us. If We become aware that We have
          collected Personal Data from anyone under the age of 13 without
          verification of parental consent, We take steps to remove that
          information from Our servers.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          If We need to rely on consent as a legal basis for processing
          Your information and Your country requires consent from a
          parent, We may require Your parent&apos;s consent before We
          collect and use that information.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Links to Other Websites</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          Our Service may contain links to other websites that are not
          operated by Us. If You click on a third party link, You will be
          directed to that third party&apos;s site. We strongly advise You
          to review the Privacy Policy of every site You visit.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          We have no control over and assume no responsibility for the
          content, privacy policies or practices of any third party sites
          or services.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Changes to this Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          We may update Our Privacy Policy from time to time. We will
          notify You of any changes by posting the new Privacy Policy on
          this page.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &ldquo;Last updated&ldquo; date at the top of this Privacy
          Policy.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          You are advised to review this Privacy Policy periodically for
          any changes. Changes to this Privacy Policy are effective when
          they are posted on this page.
        </p>
      </CardContent>
    </Card>

    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">
          If you have any questions about this Privacy Policy, You can
          contact us:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
          <li>By visiting this page on our website: youssefprodev.com</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</main> */
}
