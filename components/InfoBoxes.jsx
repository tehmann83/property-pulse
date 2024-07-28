import InfoBox from './InfoBox';
import React from 'react';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            buttonInfo={{
              backgroundColor: 'bg-gray-100',
              link: '/properties',
              text: 'Browse Properties',
            }}
            heading={'For Renters'}
            backgroundColor="bg-gray-100"
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          <InfoBox
            buttonInfo={{
              backgroundColor: 'bg-blue-500',
              link: '/properties/add',
              text: 'Browse Properties',
            }}
            heading={'For Property Owners'}
            backgroundColor="bg-blue-100"
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
