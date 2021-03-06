export function px2rem(size, context = 16) {
  return size / context + 'rem';
}

export function px2vw(size, context = 1440) {
  return (size / context) * 100 + 'vw';
}