export const metadata = {
  title: "Refund Policy | Hostao",
  description: "Hostao refund policy covering hosting services, domains, dedicated servers, and billing terms.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">Refund Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Refund Policy</h1>
          <p className="text-white/85 text-lg">Clear, fair refund terms for all Hostao services.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">

          <h2>1. 30-Day Money-Back Guarantee</h2>
          <p>Shared hosting, reseller hosting, and standard VPS plans include a 30-day money-back guarantee for first-time purchases. If you are not satisfied with your hosting service for any reason, you may request a full refund of the base hosting plan cost within 30 calendar days of your initial activation date.</p>
          <p>This guarantee applies exclusively to first-time customers and the initial hosting plan purchase. It does not apply to renewals, upgrades, or subsequent purchases. The 30-day period begins on the date your hosting account is activated, not the date of payment. To exercise this guarantee, submit a cancellation request through the client area billing portal or by opening a support ticket.</p>
          <p>Refunds under this guarantee are processed to the original payment method. Please allow 7 to 10 business days for the refund to appear on your statement. If your original payment method is no longer available, we will work with you to arrange an alternative refund method. Accounts that have violated our Terms of Service or Acceptable Use Policy are not eligible for the money-back guarantee.</p>

          <h2>2. Non-Refundable Services</h2>
          <p>The following services and fees are non-refundable under all circumstances:</p>
          <ul>
            <li>Domain registrations, renewals, transfers, and redemption fees (see Section 4 for details)</li>
            <li>SSL certificates once issued and provisioned (see Section 3 for details)</li>
            <li>Dedicated servers and custom-built infrastructure</li>
            <li>Software licenses including cPanel, Plesk, WHMCS, LiteSpeed, and premium add-ons</li>
            <li>Setup fees, server configuration fees, and migration fees</li>
            <li>Third-party services procured on your behalf</li>
            <li>Administrative fees and late payment charges</li>
            <li>Premium DNS services and DDoS protection add-ons once activated</li>
          </ul>
          <p>Non-refundable items are clearly identified during the checkout process. By completing your purchase, you acknowledge and agree that these items are excluded from any refund guarantees. If you have questions about refund eligibility before purchasing, please contact our sales team.</p>

          <h2>3. SSL Certificate Refunds</h2>
          <p>SSL certificates are non-refundable once they have been issued and provisioned by the Certificate Authority (CA). Due to the nature of digital certificates, the issuance process is irreversible, and we are unable to recover costs from the Certificate Authority after issuance. This applies to all SSL certificate types, including Domain Validation (DV), Organization Validation (OV), Extended Validation (EV), and Wildcard certificates.</p>
          <p>If an SSL certificate has been ordered but not yet issued (i.e., the validation process has not been completed), you may request a cancellation and full refund within 7 days of purchase. Once the certificate is issued, no refund is available regardless of whether the certificate has been installed on your server.</p>
          <p>If you experience technical issues with your SSL certificate, our support team will assist with troubleshooting, reissuance, or replacement at no additional cost during the certificate&apos;s validity period. Certificate reissuance does not extend the original expiration date.</p>

          <h2>4. Domain Registration Refunds</h2>
          <p>Domain registrations are non-refundable in accordance with ICANN (Internet Corporation for Assigned Names and Numbers) policies and registry agreements. Once a domain name is registered, the registration fee cannot be recovered from the domain registry. This applies to new registrations, renewals, and transfers alike.</p>
          <p>Domain redemption fees, which apply when reclaiming an expired domain during the redemption grace period, are also non-refundable. Premium domain purchases, domain privacy/WHOIS protection services, and DNS management add-ons are non-refundable once activated.</p>
          <p>Certain country-code top-level domains (ccTLDs) may have specific registry-imposed refund restrictions or grace periods that differ from generic TLDs. For domain-specific questions, please contact our support team before completing your purchase. If a domain registration fails due to a system error on our end, we will issue a full refund within 5 business days.</p>

          <h2>5. VPS &amp; Dedicated Server Refunds</h2>
          <p>Standard VPS plans (unmanaged and managed) are covered by the 30-day money-back guarantee for first-time customers. Cloud VPS instances billed hourly or on a pay-as-you-go basis are not eligible for refunds, as charges reflect actual resource consumption. Usage charges incurred before cancellation are final.</p>
          <p>Dedicated servers are non-refundable due to the specialized hardware provisioning, configuration, and resource allocation involved. Once a dedicated server order is confirmed and provisioning begins, the setup fee and first month&apos;s payment are non-refundable. If a dedicated server is not provisioned within the estimated delivery time, you may cancel for a full refund of all payments made.</p>
          <p>Managed service add-ons for VPS and dedicated servers (such as server management, monitoring, and security hardening) are billed monthly and may be cancelled at any time. Cancellation takes effect at the end of the current billing period, and no prorated refunds are issued for partial months of managed services.</p>

          <h2>6. Upgrade &amp; Downgrade Policy</h2>
          <p>When upgrading your hosting plan, you will be charged the prorated difference between your current plan and the new plan for the remainder of your billing cycle. Upgrades take effect immediately upon payment. If you are unsatisfied with the upgraded plan, you may downgrade within 7 days for a credit of the prorated upgrade amount applied to your account balance.</p>
          <p>Downgrading your hosting plan takes effect at the start of your next billing cycle. No refunds or credits are issued for the current billing period when downgrading. Ensure that your website&apos;s resource usage is compatible with the lower-tier plan before requesting a downgrade, as exceeding resource limits may result in service degradation.</p>
          <p>For plan changes involving a different billing cycle (e.g., switching from monthly to annual billing), the remaining balance on your current plan will be applied as a credit toward the new plan. If the credit exceeds the cost of the new plan, the difference will be retained as account credit for future invoices. Account credits are non-transferable and non-refundable as cash.</p>

          <h2>7. Currency &amp; Exchange Rate Policy</h2>
          <p>Hostao services are priced in US Dollars (USD) and Indian Rupees (INR). When you make a payment in a currency different from the invoice currency, your bank or payment provider will apply the prevailing exchange rate at the time of the transaction. Hostao has no control over exchange rates applied by banks or payment processors.</p>
          <p>Refunds are processed in the same currency as the original payment. Due to exchange rate fluctuations between the date of payment and the date of refund, the refunded amount in your local currency may differ from the originally charged amount. Hostao is not responsible for any differences arising from currency exchange rate variations.</p>
          <p>Any currency conversion fees, international transaction fees, or similar charges imposed by your bank or payment provider are your responsibility and are not refundable by Hostao. We recommend contacting your bank for information about applicable fees before making international payments.</p>

          <h2>8. Prorated Refunds</h2>
          <p>After the 30-day money-back guarantee window has passed, prepaid hosting services are generally non-refundable. However, in exceptional circumstances (such as extended service outages attributable to Hostao, or billing errors on our part), prorated refunds may be approved at Hostao&apos;s sole discretion.</p>
          <p>Prorated refund amounts are calculated based on the number of unused full months remaining on your billing cycle, minus any applicable setup fees, domain costs, and non-refundable add-ons. Partial months are not prorated. Approved prorated refunds may be issued as account credit or refunded to the original payment method, at Hostao&apos;s discretion.</p>
          <p>To request a prorated refund, submit a billing support ticket with your account details, service ID, and a detailed explanation of your circumstances. Our billing team will review your request and respond within 3 to 5 business days with a determination of eligibility and the calculated refund amount, if applicable.</p>

          <h2>9. Abuse &amp; Policy Violations</h2>
          <p>Accounts suspended or terminated due to violations of our Terms of Service, Acceptable Use Policy, or applicable laws are not eligible for any refunds. This includes but is not limited to: spamming, phishing, distribution of malware, hosting of illegal content, copyright infringement, resource abuse, and fraudulent activity.</p>
          <p>If your account is suspended for a policy violation, you will be notified of the violation and given an opportunity to remedy the issue (except in cases of severe or emergency violations). If the violation is not resolved within the specified time frame, or if the violation is of a nature that warrants immediate termination, your account will be terminated without refund.</p>
          <p>Hostao reserves the right to retain any prepaid fees for accounts terminated due to abuse as liquidated damages to offset the costs of investigating and remediating the violation, including but not limited to staff time, infrastructure remediation, and third-party notification costs.</p>

          <h2>10. Refund Processing Timeline</h2>
          <p>Once a refund is approved by our billing team, it is initiated within 2 business days. Credit card and debit card refunds typically appear on your statement within 5 to 10 business days, depending on your card issuer. UPI and net banking refunds are typically processed within 5 to 7 business days.</p>
          <p>PayPal refunds are generally reflected in your PayPal account within 3 to 5 business days. Bank wire transfer refunds may take up to 15 business days due to international banking processes and intermediary bank handling. Hostao is not responsible for delays caused by banks, payment processors, or other financial intermediaries.</p>
          <p>You will receive an email confirmation when your refund is initiated. If you have not received your refund within the expected time frame, please first contact your bank or payment provider to inquire about the status. If the issue persists, open a billing support ticket with the refund confirmation details and we will investigate.</p>

          <h2>11. Chargebacks</h2>
          <p>We strongly encourage customers to contact our billing support team to resolve any payment disputes before initiating a chargeback with their bank or credit card company. Our team is committed to resolving billing issues promptly and fairly. In most cases, we can address concerns faster than the chargeback process.</p>
          <p>Filing a chargeback without first attempting to resolve the issue with Hostao may result in immediate suspension of your account and all associated services. If the chargeback is determined to be fraudulent or abusive, your account will be permanently terminated, and we may pursue collection actions and report the incident to fraud prevention databases where legally permitted.</p>
          <p>If a legitimate billing error has occurred, we will issue a refund directly and work with you to resolve the matter. Chargebacks incur processing fees from our payment providers, and accounts with a pattern of chargebacks may be required to use alternative payment methods or prepay for services.</p>

          <h2>12. How to Request a Refund</h2>
          <p>To request a refund, follow these steps:</p>
          <ul>
            <li>Log in to your client area at my.hostao.com</li>
            <li>Navigate to the Billing section and open a new support ticket under the &quot;Billing&quot; department</li>
            <li>Include your service ID, invoice number, registered account email, and a detailed reason for the refund request</li>
            <li>Our billing team will review your request and respond within 1 to 3 business days with eligibility details</li>
          </ul>
          <p>Alternatively, you can email billing@hostao.com with the same information. Please do not submit refund requests through live chat or social media channels, as these cannot be securely verified. All refund requests must be submitted by the account holder or an authorized contact listed on the account.</p>
          <p>For urgent billing matters, you may also contact our support team via phone during business hours. Please have your account verification details ready when calling. We process all refund requests in the order received and strive to provide a resolution as quickly as possible.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
