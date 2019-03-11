# text-mask-siret [![Build Status][travis badge]][travis link] [![Coverage Status][coveralls badge]][coveralls link]

Text Mask function for french SIRET and SIREN.

## [Example](https://dimitrinicolas.github.io/text-mask-siret/example/)

Demo available here: [dimitrinicolas.github.io/text-mask-siret/example](https://dimitrinicolas.github.io/text-mask-siret/example/)

## Installation

```bash
npm i text-mask-siret
```

## Usage

### With React.js

```jsx
import React from 'react'
import MaskedInput from 'react-text-mask'
import { siretMask, sirenMask } from 'text-mask-siret';

const mask = siretMask;
/**
 * Or
 * const mask = sirenMask;
 */

export default () => <MaskedInput mask={mask} />;
```

### In Vanilla JS

```html
<script src="./node_modules/vanilla-text-mask/dist/vanillaTextMask.js"></script>
<script src="./node_modules/text-mask-siret/dist/text-mask-siret.umd.min.js"></script>
<script>
  vanillaTextMask.maskInput({
    inputElement: document.getElementById('siret-input'),
    mask: textMaskSiret.siretMask,
    // Or mask: textMaskSiret.sirenMask
  });
});
</script>
  ```

## Build

Compile with Rollup:

```console
npm run build
```

Build and test:

```console
npm test
```

## Related

- [`text-mask`](https://github.com/text-mask/text-mask) - Input mask for React, Angular, Ember, Vue, & plain JavaScript
- [`text-mask-vat-id`](https://github.com/dimitrinicolas/text-mask-vat-id) - Text Mask for VAT identification number

## License

This project is licensed under the [MIT license](LICENSE).

[travis badge]: https://travis-ci.org/dimitrinicolas/text-mask-siret.svg?branch=master
[travis link]: https://travis-ci.org/dimitrinicolas/text-mask-siret
[coveralls badge]: https://coveralls.io/repos/github/dimitrinicolas/text-mask-siret/badge.svg?branch=master
[coveralls link]: https://coveralls.io/github/dimitrinicolas/text-mask-siret?branch=master
