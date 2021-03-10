import Home from './pages/Home';
import Result from './pages/Result';

// router정의
const createHashRouter = root => {
    const HomePage = new Home(root);
    const ResultPage = new Result(root);
    const routes = {
        '': HomePage,
        'result': ResultPage
    };

    function initRouter() {
        render();
        window.addEventListener('hashchange', () => render(getHash()));
    }

    function getHash() {
        const hash = location.hash.replace('#', '');
        if (!routes[hash]) {
            root.innerHTML = `sorry, ${hash} not found`;
            return;
        }
        return hash;
    }

    function render(route = '') {
        root.innerHTML = '';
        root.appendChild(routes[route].render());
    }

    initRouter();
};

export default createHashRouter;