import templateHbs from './header-item.component.hbs';

class HeaderItemComponent {
    render() {
        const body = document.querySelector('body');
        body.innerHTML = templateHbs();
    }
}

export default HeaderItemComponent;