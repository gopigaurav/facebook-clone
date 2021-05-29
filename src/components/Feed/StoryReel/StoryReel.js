import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)

// images (story)
import frontEnd from '../../../img/story/storyImage/front-end.jpg'
import html from '../../../img/story/storyImage/html.jpg'
import js from '../../../img/story/storyImage/js.jpg'
import css from '../../../img/story/storyImage/css.jpg'
import frontEndSteps from '../../../img/story/storyImage/front-end-steps.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={frontEnd}
               // profileSrc={gopi}
                title="Gopi"
            />
            <Story 
                image={html}
               // profileSrc={sonny}
                title="sonny sangha"
            />
            <Story 
                image={js}
               // profileSrc={clever}
                title="programmer"
            />
        </div>
    )
}

export default StoryReel;
