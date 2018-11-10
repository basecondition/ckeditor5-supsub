/**
 * @license Copyright (c) 2019, Joachim Doerr. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module suppersub/sub/subediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from "@ckeditor/ckeditor5-basic-styles/src/attributecommand";

const SUB = 'sub';

/**
 * The subscript editing feature.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SubEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow subscript attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: SUB } );

		editor.conversion.attributeToElement( {
			model: SUB,
			view: 'sub',
			upcastAlso: [
				'sub',
				{
					styles: {
						'vertical-align': 'sub'
					}
				}
			]
		} );

		// Create subscript command.
		editor.commands.add( SUB, new AttributeCommand( editor, SUB ) );

		// Set the Ctrl+Shift+P keystroke.
		editor.keystrokes.set( 'CTRL+SHIFT+B', 'subscript' );
	}
}
