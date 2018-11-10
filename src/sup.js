/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module supersub/sup
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SupEditing from './sup/supediting';
import SupUI from './sup/supui';

/**
 * The sup feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Sup extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ SupEditing, SupUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Sup';
	}
}
