import BaseClass from "../../core/base-class";
import tplSectionComponent from './section.component.hbs';

class SectionLeftRightComponent extends BaseClass {
    constructor(container, {sectionLeft = null, sectionRight = null} = {}) {
        super();
        this.setRootContainer(container);
        this.setTemplate({
            template: tplSectionComponent,
            params: {
                sectionLeft,
                sectionRight
            }
        });
        this.render();
    }
}

export default SectionLeftRightComponent;