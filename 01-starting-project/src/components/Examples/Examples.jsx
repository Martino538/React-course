import { useState } from "react";

import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import TabButton from '../TabButton/TabButton.jsx';
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please select a topic.</p>
  
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      );
    }
    
    return(
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                <TabButton isActive={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isActive={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isActive={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>{tabContent}</Tabs>
      </Section>
    );
}