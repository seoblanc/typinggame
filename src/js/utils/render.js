const append = (parent, child, positon = 'afterend') => {
  if (!isElement(parent)) return;
  if (!isElement(child)) return;
  parent.insertAdjacentElement(positon, child);
};

const isElement = (element) => element instanceof Element || element instanceof HTMLDocument;

export default render;