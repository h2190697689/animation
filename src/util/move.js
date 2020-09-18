/**
 * @param {HTMLElement} ele 元素节点
 * @param {number} change 改变量
 * @param {number} duration 动画持续时长
 */
export function moveBox(ele, change, duration) {
    // 使用闭包保存定时器标识
    let handle;
    // 返回动画函数
    return () => {
        // 开始时间
        let startTime = performance.now();
        // 防止启动多个定时器
        cancelAnimationFrame(handle);
        // 回调函数
        function _animation() {
            // 这一帧开始的时间
            let current = performance.now();
            let eleTop = ele.offsetLeft;
            // 这一帧内元素移动的距离
            let left = change * easeInOutCubic((current - startTime) / duration);
            ele.style.left = `${~~left}px`;
            // 判断动画是否执行完
            if ((current - startTime) / duration < 1) {
                handle = requestAnimationFrame(_animation);
            } else {
                cancelAnimationFrame(handle);
            }
        }
        // 第一帧开始
        handle = requestAnimationFrame(_animation);
    };
}
/**
 * 三阶贝塞尔曲线ease-in-out
 * @param {number} k
 */
export function easeInOutCubic(k) {
    return (k *= 2) < 1 ? 0.5 * k * k * k : 0.5 * ((k -= 2) * k * k + 2);
}
