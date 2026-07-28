export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SolarEnergyContractor',
        '@id': 'https://www.valueminesolutions.com.ng/#organization',
        name: 'Valuemine Solar Solutions',
        url: 'https://www.valueminesolutions.com.ng',
        logo: 'https://www.valueminesolutions.com.ng/logo.png',
        image: 'https://www.valueminesolutions.com.ng/og-image.jpg',
        telephone: '+2348136812541',
        email: 'info@valueminesolutions.com.ng',
        priceRange: '₦₦₦',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No 1, Idi-Osan, Ologuneru',
          addressLocality: 'Ibadan',
          addressRegion: 'Oyo State',
          postalCode: '200284',
          addressCountry: 'NG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 7.4215,
          longitude: 3.8422,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Ibadan' },
          { '@type': 'AdministrativeArea', name: 'Ologuneru' },
          { '@type': 'AdministrativeArea', name: 'Bodija' },
          { '@type': 'AdministrativeArea', name: 'Jericho' },
          { '@type': 'AdministrativeArea', name: 'Akobo' },
          { '@type': 'AdministrativeArea', name: 'Lagos' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Solar & Inverter Engineering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Residential Hybrid Solar System Installation',
                description:
                  'Custom sizing and setup of 3.5kVA – 10kVA solar systems with LiFePO4 battery backups for home independence.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Inverter Diagnostic & Repair Services',
                description:
                  'Component-level troubleshooting and repair for hybrid solar inverters in Ibadan.',
              },
            },
          ],
        },
        sameAs: ['https://maps.google.com/maps?cid=17632031684823245148'],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.valueminesolutions.com.ng/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does a 5kVA lithium solar system cost in Ibadan, Nigeria?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A standard 5kVA hybrid solar system with a 5.12kWh LiFePO4 lithium battery and 6 x 550W Tier-1 panels ranges based on exact appliance specs. Valuemine Solar Solutions provides custom sizing to handle double-door fridges, pumping machines, and household lighting during grid outages.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where can I get affordable inverter system in Ologuneru or Ibadan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Valuemine Solar Solutions offers specialized inverter sales and installation at No 1, Idi-Osan, Ologuneru, Ibadan.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

