/**
 * @license Copyright (c) 2019, Joachim Doerr. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module supersub/sub
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SubEditing from './sub/subediting';
import SubUI from './sub/subui';

/**
 * The sub feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Sub extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ SubEditing, SubUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Sub';
	}
}
