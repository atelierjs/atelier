const avantSans = './AvantSans.scss';

try {
  require(`${avantSans}`);
} catch (e) {
  console.info(e);
}
