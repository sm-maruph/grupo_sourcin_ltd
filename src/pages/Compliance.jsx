import React from "react";

export default function Compliance() {
  return (
    <section className="bg-primary min-h-screen py-12 px-6 md:px-16 font-sans text-body">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <img
          src="https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/services/ss/ss2.webp"
          alt="Workers sewing garments"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
        <img
          src="https://apparelresources.com/wp-content/uploads/2022/07/Green-Factory-Award.jpg"
          alt="Garment factory workers"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="bg-accent p-8 md:p-10 rounded-2xl shadow-lg leading-relaxed text-justify text-[15px] text-heading">
        <p className="mb-6">
          Our code is derived from the values and standards set by our
          customers, the United Nations, more particularly the Declaration of
          Human Rights and many of the ILO core conventions and local LAW.
        </p>

        <p className="mb-6">
          It will be our earnest endeavour to meet all the aspects of our buyers’
          code of conduct. We will only work with such factories which are
          approved by our buyers.
        </p>

        <ul className="space-y-4">
          <li>
            <strong>Child labor:</strong> Use of Child labor will not be
            tolerated. We will not work with such business partners who employ
            workers lesser than 15 years of age. Further, no worker shall be
            younger than the mandatory school going age in the respective
            countries of operation. If the local law stipulates a higher minimum
            age than 15 years, then the more stringent limit shall be
            applicable.
          </li>
          <li>
            <strong>Forced labor:</strong> We will not work with any factory or
            organization which engages in forced or bonded labour.
          </li>
          <li>
            <strong>Disciplinary practices:</strong> We expect all our business
            partners to establish a clear disciplinary action procedure in line
            with the local law. We will not work with factories whose employees
            use abusive language, or practice corporal punishment, in the form
            of mental or physical abuse or any coercive practice in any form
            against workers.
          </li>
          <li>
            <strong>Abusement & harassment:</strong> We will not work with any
            factory or organization which engages abasement and harassment. It
            is strongly prohibited as buyer Code of Conduct, as per our business
            ethics as well as our Local Law.
          </li>
          <li>
            <strong>Legal requirements:</strong> We expect all our business
            partners to comply with the local laws applicable to the conduct of
            their business.
          </li>
          <li>
            <strong>Ethical standards:</strong> We will try to identify and work
            with such organizations whose ethical standards are not divergent
            from ours.
          </li>
          <li>
            <strong>Working hours:</strong> We will prefer to work with business
            partners who try and meet the 60 hour week limit. Whenever the
            regular work hour limit is exceeded we expect the workers to be
            compensated per the local law for the additional hours. We will
            accept flexibility in scheduling work hours however we will not use
            business partners, who on a regular and systematic basis work more
            than the 60 hour week. Also, workers should be given one day off in
            seven days.
          </li>
          <li>
            <strong>Wages and Benefits:</strong> We will only work with such
            business partners who compensate their workers as per the prevailing
            law and provide all benefits legally due to them.
          </li>
          <li>
            <strong>Freedom of Association:</strong> We respect the rights of
            workers to join an association of their choice and their right to
            Collective Bargaining. We will work with such business partners who
            share this belief and they should ensure that workers who
            participate or associate with such movements are not discriminated
            against. No Punitive action should be taken against such workers for
            being a part of such association or movement as long as they don’t
            violate any of the local laws.
          </li>
          <li>
            <strong>Discrimination:</strong> While being cognizant of cultural,
            religious and other differences, we firmly believe that workers
            should be given an opportunity to work based on their skills only.
            Caste, Creed, Race etc: shall not be a part of the process used to
            decide employability.
          </li>
          <li>
            <strong>Unauthorized Subcontract:</strong> Unauthorized
            subcontracting is considered a Zero Tolerance Violation. No vendor
            shall subcontract any aspect of production without prior information
            to and approval from our company. Any violation will result in
            delisting of such factories.
          </li>
          <li>
            <strong>Building and fire safety:</strong> We will want all our
            business partners to ensure Building and fire safety as per the
            local Law and buyers requirement.
          </li>
          <li>
            <strong>Health & safety:</strong> We will engage only with such
            factories who provide their workers a safe and healthy work
            environment.
          </li>
          <li>
            <strong>Environment:</strong> We will want all our business partners
            to ensure that their work process does not affect the environment
            adversely in any way. It is expected of all our business partners to
            meet the legal requirement on all environmental aspects and
            continuously strive to go beyond just meeting the law.
          </li>
        </ul>
      </div>
    </section>
  );
}
