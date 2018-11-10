/**
 * @license Copyright (c) 2019, Joachim Doerr. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module supersub/sub/subui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import subIcon from '../../theme/icons/sub.svg';

const SUB = 'sub';

/**
 * The sub UI feature. It introduces the sub button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SubUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		// Add strikethrough button to feature components.
		editor.ui.componentFactory.add( SUB, locale => {
			const command = editor.commands.get( SUB );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Subscript' ),
				icon: subIcon,
				keystroke: 'CTRL+SHIFT+B',
				tooltip: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute( SUB ) );

			return view;
		} );
	}
}
