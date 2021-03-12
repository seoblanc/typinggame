/**
 * @param {*} root
 * 메인화면/결과화면을 hash를 통해 routing 구현
 */
const Router = containers => {
    const initRouter = () => {
        render(getHash());
        window.addEventListener('hashchange', () => render(getHash()));
    }

    const getHash = () => {
        const hash = location.hash.replace('#', '');
        if (!containers[hash]) {
            alert('존재하지 않는 페이지 입니다. 첫 화면으로 이동합니다.');
            return '';
        }
        return hash;
    }

    const render = (route = '') => {
        containers[route].render();
    }

    initRouter();
};

export default Router;