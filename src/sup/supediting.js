/**
 * @license Copyright (c) 2019, Joachim Doerr. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module suppersub/sup/supediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from "@ckeditor/ckeditor5-basic-styles/src/attributecommand";

const SUP = 'sup';

/**
 * The superscript editing feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SupEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow superscript attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: SUP } );

		editor.conversion.attributeToElement( {
			model: SUP,
			view: 'sup',
			upcastAlso: [
				'sup',
				{
					styles: {
						'vertical-align': 'super'
					}
				}
			]
		} );

		// Create superscript command.
		editor.commands.add( SUP, new AttributeCommand( editor, SUP ) );

		// Set the Ctrl+Shift+P keystroke.
		editor.keystrokes.set( 'CTRL+SHIFT+P', 'superscript' );
	}
}
