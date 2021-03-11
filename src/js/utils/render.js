export const append = (parent, child, positon = 'afterend') => {
  if (!isElement(parent)) return;
  if (!isElement(child)) return;
  parent.insertAdjacentElement(positon, child);
};

export const create = (name, attr) => {
  // element 생성
  const el = document.createElement(name)
  for (const key in attr) {
    const value = attr[key] // key는 속성 이름, v는 값
    switch (key) {
      case 'children'
        : el.append(value);
        break;
      case 'event' :
        for (const event in value) {
          el.addEventListener(event, value[event])
        };
        break;
      default :
        el.setAttribute(key, value);
        break;
    };
  };
  return el
}
