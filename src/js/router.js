import Home from "./containers/Home";
import Result from "./containers/Result";

/**
 * @param {*} root
 * 메인화면/결과화면을 hash를 통해 routing 구현
 */
const createHashRouter = root => {
    window.oHome = new Home(root);
    window.oResult = new Result(root);
    const routes = {
        '': window.oHome,
        'result': window.oResult
    };

    const initRouter = () => {
        render();
        window.addEventListener('hashchange', () => render(getHash()));
    }

    const getHash = () => {
        const hash = location.hash.replace('#', '');
        if (!routes[hash]) {
            alert('존재하지 않는 페이지 입니다. 첫 화면으로 이동합니다.');
            return '';
        }
        return hash;
    }

    const render = (route = '') => {
        routes[route].render();
    }

    initRouter();
};

export default createHashRouter;