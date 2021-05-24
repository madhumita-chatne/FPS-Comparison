import GLC from '../GLCommander/index';

let r = 0;

const render = () => {
    GLC.clear(r, 0, 0, 1); 
    r += 0.001;
    window.requestAnimationFrame(render)
}
export default (id) => {
    const canvas = document.querySelector(`#${id}`);

    if(!canvas){
        return;
    }else{
        const gl = canvas.getContext('webgl');
        if(!gl){
            return;
        }else{
            GLC.init(gl);
            // GLC.clear(1.0, 0, 0, 1);
            window.requestAnimationFrame(render)
        }
    }
}