import React from 'react';
import FeaturesSection from './FeaturesSection'


function MainSection(props) {
    
        return(
          <section className="main__form">
            <h3>Customize your laptop</h3>
              <FeaturesSection
                  features={props.features}
                  handleUpdate={props.handleUpdate}
                  selected={props.selected}
              />
          </section>
          )
 
}

export default MainSection;