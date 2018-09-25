import { leading } from '../helpers/typography';

const sides = ['bottom', 'top', 'left', 'right'];

export default sides
  .map(
    side => `
  .mg-${side}_double {
    margin-${side}: ${leading(2)}
  }
  .pad-${side}_double {
    padding-${side}: ${leading(2)};
  }
  .mg-${side}_single {
    margin-${side}: ${leading(1)};
  }
  .pad-${side}_single {
    padding-${side}: ${leading(1)};
  }
  .mg-${side}_half {
    margin-${side}: ${leading(0.5)};
  }
  .pad-${side}_half {
    padding-${side}: ${leading(0.5)};
  }
  .mg-${side}_none {
    margin-${side}: 0;
  }
  .pad-${side}_none {
    padding-${side}: 0;
  }
`
  )
  .join('');
