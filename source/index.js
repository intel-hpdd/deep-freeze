//
// Copyright (c) 2017 Intel Corporation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export default function deepFreeze (obj) {
  Object.freeze(obj);

  Object.keys(obj)
    .filter(function removeNonObjects (key) {
      return obj && obj[key] != null && typeof obj[key] === 'object';
    })
    .forEach(function freezeProps (key) {
      if (obj)
        deepFreeze(obj[key]);
    });

  return obj;
}
