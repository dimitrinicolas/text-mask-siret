import test from 'ava';

import { conformToMask } from 'text-mask-core';

import { siretMask, sirenMask } from '..';

const SIREN = '123456789';
const FORMATED_SIREN = '123 456 789';

const SIRET = `${SIREN}00010`;
const FORMATED_SIRET = `${FORMATED_SIREN} 00010`;

test('siretMask', t => {
  t.is(
    conformToMask(SIRET, siretMask, { guide: false }).conformedValue,
    FORMATED_SIRET
  );
  t.is(
    conformToMask(SIRET, siretMask, { guide: false }).conformedValue.replace(
      / /g,
      ''
    ),
    SIRET
  );
});

test('sirenMask', t => {
  t.is(
    conformToMask(SIREN, sirenMask, { guide: false }).conformedValue,
    FORMATED_SIREN
  );
  t.is(
    conformToMask(SIREN, sirenMask, { guide: false }).conformedValue.replace(
      / /g,
      ''
    ),
    SIREN
  );
});

test('empty', t => {
  t.is(conformToMask('', sirenMask, { guide: false }).conformedValue, '');
});

test('letters', t => {
  t.is(conformToMask('a', sirenMask, { guide: false }).conformedValue, '');
});

test('formatted siren', t => {
  t.is(
    conformToMask('123-456 789', sirenMask, { guide: false }).conformedValue,
    FORMATED_SIREN
  );
});
