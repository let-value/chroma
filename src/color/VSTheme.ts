export interface VSTheme {
    "font-family": string;
    "font-weight": string;
    "font-size": string;
    "editor-font-family": string;
    "editor-font-weight": string;
    "editor-font-size": string;
    foreground: string;
    errorForeground: string;
    descriptionForeground: string;
    "icon-foreground": string;
    focusBorder: string;
    "selection-background": string;
    "textSeparator-foreground": string;
    "textLink-foreground": string;
    "textLink-activeForeground": string;
    "textPreformat-foreground": string;
    "textBlockQuote-background": string;
    "textBlockQuote-border": string;
    "textCodeBlock-background": string;
    "widget-shadow": string;
    "input-background": string;
    "input-foreground": string;
    "input-border": string;
    "inputOption-activeBorder": string;
    "inputOption-activeBackground": string;
    "inputOption-activeForeground": string;
    "input-placeholderForeground": string;
    "inputValidation-infoBackground": string;
    "inputValidation-infoBorder": string;
    "inputValidation-warningBackground": string;
    "inputValidation-warningBorder": string;
    "inputValidation-errorBackground": string;
    "inputValidation-errorBorder": string;
    "dropdown-background": string;
    "dropdown-foreground": string;
    "dropdown-border": string;
    "checkbox-background": string;
    "checkbox-foreground": string;
    "checkbox-border": string;
    "button-foreground": string;
    "button-background": string;
    "button-hoverBackground": string;
    "button-secondaryForeground": string;
    "button-secondaryBackground": string;
    "button-secondaryHoverBackground": string;
    "badge-background": string;
    "badge-foreground": string;
    "scrollbar-shadow": string;
    "scrollbarSlider-background": string;
    "scrollbarSlider-hoverBackground": string;
    "scrollbarSlider-activeBackground": string;
    "progressBar-background": string;
    "editorError-foreground": string;
    "editorWarning-foreground": string;
    "editorInfo-foreground": string;
    "editorHint-foreground": string;
    "sash-hoverBorder": string;
    "editor-background": string;
    "editor-foreground": string;
    "editorWidget-background": string;
    "editorWidget-foreground": string;
    "editorWidget-border": string;
    "quickInput-background": string;
    "quickInput-foreground": string;
    "quickInputTitle-background": string;
    "pickerGroup-foreground": string;
    "pickerGroup-border": string;
    "keybindingLabel-background": string;
    "keybindingLabel-foreground": string;
    "keybindingLabel-border": string;
    "keybindingLabel-bottomBorder": string;
    "editor-selectionBackground": string;
    "editor-inactiveSelectionBackground": string;
    "editor-selectionHighlightBackground": string;
    "editor-selectionHighlightBorder": string;
    "editor-findMatchBackground": string;
    "editor-findMatchHighlightBackground": string;
    "editor-findRangeHighlightBackground": string;
    "editor-findMatchBorder": string;
    "editor-findMatchHighlightBorder": string;
    "editor-findRangeHighlightBorder": string;
    "searchEditor-findMatchBackground": string;
    "searchEditor-findMatchBorder": string;
    "editor-hoverHighlightBackground": string;
    "editorHoverWidget-background": string;
    "editorHoverWidget-foreground": string;
    "editorHoverWidget-border": string;
    "editorHoverWidget-statusBarBackground": string;
    "editorLink-activeForeground": string;
    "editorInlayHint-foreground": string;
    "editorInlayHint-background": string;
    "editorLightBulb-foreground": string;
    "editorLightBulbAutoFix-foreground": string;
    "diffEditor-insertedTextBackground": string;
    "diffEditor-removedTextBackground": string;
    "diffEditor-diagonalFill": string;
    "list-focusBackground": string;
    "list-focusForeground": string;
    "list-focusOutline": string;
    "list-activeSelectionBackground": string;
    "list-activeSelectionForeground": string;
    "list-inactiveSelectionBackground": string;
    "list-inactiveSelectionForeground": string;
    "list-hoverBackground": string;
    "list-hoverForeground": string;
    "list-dropBackground": string;
    "list-highlightForeground": string;
    "list-focusHighlightForeground": string;
    "list-invalidItemForeground": string;
    "list-errorForeground": string;
    "list-warningForeground": string;
    "listFilterWidget-background": string;
    "listFilterWidget-outline": string;
    "listFilterWidget-noMatchesOutline": string;
    "list-filterMatchBackground": string;
    "list-filterMatchBorder": string;
    "tree-indentGuidesStroke": string;
    "tree-tableColumnsBorder": string;
    "list-deemphasizedForeground": string;
    "quickInputList-focusForeground": string;
    "quickInputList-focusBackground": string;
    "menu-foreground": string;
    "menu-background": string;
    "menu-selectionForeground": string;
    "menu-selectionBackground": string;
    "menu-separatorBackground": string;
    "toolbar-hoverBackground": string;
    "toolbar-activeBackground": string;
    "editor-snippetTabstopHighlightBackground": string;
    "editor-snippetFinalTabstopHighlightBorder": string;
    "breadcrumb-foreground": string;
    "breadcrumb-background": string;
    "breadcrumb-focusForeground": string;
    "breadcrumb-activeSelectionForeground": string;
    "breadcrumbPicker-background": string;
    "merge-currentHeaderBackground": string;
    "merge-currentContentBackground": string;
    "merge-incomingHeaderBackground": string;
    "merge-incomingContentBackground": string;
    "merge-commonHeaderBackground": string;
    "merge-commonContentBackground": string;
    "editorOverviewRuler-currentContentForeground": string;
    "editorOverviewRuler-incomingContentForeground": string;
    "editorOverviewRuler-commonContentForeground": string;
    "editorOverviewRuler-findMatchForeground": string;
    "editorOverviewRuler-selectionHighlightForeground": string;
    "minimap-findMatchHighlight": string;
    "minimap-selectionHighlight": string;
    "minimap-errorHighlight": string;
    "minimap-warningHighlight": string;
    "minimapSlider-background": string;
    "minimapSlider-hoverBackground": string;
    "minimapSlider-activeBackground": string;
    "problemsErrorIcon-foreground": string;
    "problemsWarningIcon-foreground": string;
    "problemsInfoIcon-foreground": string;
    "charts-foreground": string;
    "charts-lines": string;
    "charts-red": string;
    "charts-blue": string;
    "charts-yellow": string;
    "charts-orange": string;
    "charts-green": string;
    "charts-purple": string;
    "editor-lineHighlightBackground": string;
    "editor-lineHighlightBorder": string;
    "editor-rangeHighlightBackground": string;
    "editor-symbolHighlightBackground": string;
    "editorCursor-foreground": string;
    "editorWhitespace-foreground": string;
    "editorIndentGuide-background": string;
    "editorIndentGuide-activeBackground": string;
    "editorLineNumber-foreground": string;
    "editorActiveLineNumber-foreground": string;
    "editorLineNumber-activeForeground": string;
    "editorRuler-foreground": string;
    "editorCodeLens-foreground": string;
    "editorBracketMatch-background": string;
    "editorBracketMatch-border": string;
    "editorOverviewRuler-border": string;
    "editorGutter-background": string;
    "editorUnnecessaryCode-opacity": string;
    "editorSuggestPreview-opacity": string;
    "editorOverviewRuler-rangeHighlightForeground": string;
    "editorOverviewRuler-errorForeground": string;
    "editorOverviewRuler-warningForeground": string;
    "editorOverviewRuler-infoForeground": string;
    "symbolIcon-arrayForeground": string;
    "symbolIcon-booleanForeground": string;
    "symbolIcon-classForeground": string;
    "symbolIcon-colorForeground": string;
    "symbolIcon-constantForeground": string;
    "symbolIcon-constructorForeground": string;
    "symbolIcon-enumeratorForeground": string;
    "symbolIcon-enumeratorMemberForeground": string;
    "symbolIcon-eventForeground": string;
    "symbolIcon-fieldForeground": string;
    "symbolIcon-fileForeground": string;
    "symbolIcon-folderForeground": string;
    "symbolIcon-functionForeground": string;
    "symbolIcon-interfaceForeground": string;
    "symbolIcon-keyForeground": string;
    "symbolIcon-keywordForeground": string;
    "symbolIcon-methodForeground": string;
    "symbolIcon-moduleForeground": string;
    "symbolIcon-namespaceForeground": string;
    "symbolIcon-nullForeground": string;
    "symbolIcon-numberForeground": string;
    "symbolIcon-objectForeground": string;
    "symbolIcon-operatorForeground": string;
    "symbolIcon-packageForeground": string;
    "symbolIcon-propertyForeground": string;
    "symbolIcon-referenceForeground": string;
    "symbolIcon-snippetForeground": string;
    "symbolIcon-stringForeground": string;
    "symbolIcon-structForeground": string;
    "symbolIcon-textForeground": string;
    "symbolIcon-typeParameterForeground": string;
    "symbolIcon-unitForeground": string;
    "symbolIcon-variableForeground": string;
    "editorOverviewRuler-bracketMatchForeground": string;
    "editor-linkedEditingBackground": string;
    "editor-wordHighlightBackground": string;
    "editor-wordHighlightStrongBackground": string;
    "editor-wordHighlightBorder": string;
    "editor-wordHighlightStrongBorder": string;
    "editorOverviewRuler-wordHighlightForeground": string;
    "editorOverviewRuler-wordHighlightStrongForeground": string;
    "editor-foldBackground": string;
    "editorGutter-foldingControlForeground": string;
    "peekViewTitle-background": string;
    "peekViewTitleLabel-foreground": string;
    "peekViewTitleDescription-foreground": string;
    "peekView-border": string;
    "peekViewResult-background": string;
    "peekViewResult-lineForeground": string;
    "peekViewResult-fileForeground": string;
    "peekViewResult-selectionBackground": string;
    "peekViewResult-selectionForeground": string;
    "peekViewEditor-background": string;
    "peekViewEditorGutter-background": string;
    "peekViewResult-matchHighlightBackground": string;
    "peekViewEditor-matchHighlightBackground": string;
    "editorMarkerNavigationError-background": string;
    "editorMarkerNavigationWarning-background": string;
    "editorMarkerNavigationInfo-background": string;
    "editorMarkerNavigation-background": string;
    "editorSuggestWidget-background": string;
    "editorSuggestWidget-border": string;
    "editorSuggestWidget-foreground": string;
    "editorSuggestWidget-selectedForeground": string;
    "editorSuggestWidget-selectedBackground": string;
    "editorSuggestWidget-highlightForeground": string;
    "editorSuggestWidget-focusHighlightForeground": string;
    "tab-activeBackground": string;
    "tab-unfocusedActiveBackground": string;
    "tab-inactiveBackground": string;
    "tab-unfocusedInactiveBackground": string;
    "tab-activeForeground": string;
    "tab-inactiveForeground": string;
    "tab-unfocusedActiveForeground": string;
    "tab-unfocusedInactiveForeground": string;
    "tab-border": string;
    "tab-lastPinnedBorder": string;
    "tab-activeBorder": string;
    "tab-unfocusedActiveBorder": string;
    "tab-activeBorderTop": string;
    "tab-unfocusedActiveBorderTop": string;
    "tab-activeModifiedBorder": string;
    "tab-inactiveModifiedBorder": string;
    "tab-unfocusedActiveModifiedBorder": string;
    "tab-unfocusedInactiveModifiedBorder": string;
    "editorPane-background": string;
    "editorGroup-background": string;
    "editorGroupHeader-tabsBackground": string;
    "editorGroupHeader-tabsBorder": string;
    "editorGroupHeader-noTabsBackground": string;
    "editorGroup-border": string;
    "editorGroup-dropBackground": string;
    "panel-background": string;
    "panel-border": string;
    "panelTitle-activeForeground": string;
    "panelTitle-inactiveForeground": string;
    "panelTitle-activeBorder": string;
    "panelInput-border": string;
    "panel-dropBorder": string;
    "panelSection-dropBackground": string;
    "panelSectionHeader-background": string;
    "panelSection-border": string;
    "banner-background": string;
    "banner-foreground": string;
    "banner-iconForeground": string;
    "statusBar-foreground": string;
    "statusBar-noFolderForeground": string;
    "statusBar-background": string;
    "statusBar-noFolderBackground": string;
    "statusBar-border": string;
    "statusBar-noFolderBorder": string;
    "statusBarItem-activeBackground": string;
    "statusBarItem-hoverBackground": string;
    "statusBarItem-prominentForeground": string;
    "statusBarItem-prominentBackground": string;
    "statusBarItem-prominentHoverBackground": string;
    "statusBarItem-errorBackground": string;
    "statusBarItem-errorForeground": string;
    "activityBar-background": string;
    "activityBar-foreground": string;
    "activityBar-inactiveForeground": string;
    "activityBar-border": string;
    "activityBar-activeBorder": string;
    "activityBar-dropBorder": string;
    "activityBarBadge-background": string;
    "activityBarBadge-foreground": string;
    "statusBarItem-remoteBackground": string;
    "statusBarItem-remoteForeground": string;
    "extensionBadge-remoteBackground": string;
    "extensionBadge-remoteForeground": string;
    "sideBar-background": string;
    "sideBar-border": string;
    "sideBarTitle-foreground": string;
    "sideBar-dropBackground": string;
    "sideBarSectionHeader-background": string;
    "sideBarSectionHeader-foreground": string;
    "sideBarSectionHeader-border": string;
    "titleBar-activeForeground": string;
    "titleBar-inactiveForeground": string;
    "titleBar-activeBackground": string;
    "titleBar-inactiveBackground": string;
    "titleBar-border": string;
    "menubar-selectionForeground": string;
    "menubar-selectionBackground": string;
    "notifications-foreground": string;
    "notifications-background": string;
    "notificationLink-foreground": string;
    "notificationCenterHeader-background": string;
    "notifications-border": string;
    "notificationsErrorIcon-foreground": string;
    "notificationsWarningIcon-foreground": string;
    "notificationsInfoIcon-foreground": string;
    "editorGutter-commentRangeForeground": string;
    "debugToolBar-background": string;
    "debugIcon-startForeground": string;
    "settings-headerForeground": string;
    "settings-modifiedItemIndicator": string;
    "settings-dropdownBackground": string;
    "settings-dropdownForeground": string;
    "settings-dropdownBorder": string;
    "settings-dropdownListBorder": string;
    "settings-checkboxBackground": string;
    "settings-checkboxForeground": string;
    "settings-checkboxBorder": string;
    "settings-textInputBackground": string;
    "settings-textInputForeground": string;
    "settings-textInputBorder": string;
    "settings-numberInputBackground": string;
    "settings-numberInputForeground": string;
    "settings-numberInputBorder": string;
    "settings-focusedRowBackground": string;
    "notebook-rowHoverBackground": string;
    "notebook-focusedRowBorder": string;
    "terminal-background": string;
    "terminal-foreground": string;
    "terminal-selectionBackground": string;
    "terminal-border": string;
    "terminal-dropBackground": string;
    "testing-iconFailed": string;
    "testing-iconErrored": string;
    "testing-iconPassed": string;
    "testing-runAction": string;
    "testing-iconQueued": string;
    "testing-iconUnset": string;
    "testing-iconSkipped": string;
    "testing-peekBorder": string;
    "testing-message.error.decorationForeground": string;
    "testing-message.error.lineBackground": string;
    "testing-message.warning.decorationForeground": string;
    "testing-message.warning.lineBackground": string;
    "testing-message.info.decorationForeground": string;
    "testing-message.info.lineBackground": string;
    "testing-message.hint.decorationForeground": string;
    "welcomePage-tileBackground": string;
    "welcomePage-tileHoverBackground": string;
    "welcomePage-tileShadow.": string;
    "welcomePage-progress.background": string;
    "welcomePage-progress.foreground": string;
    "walkThrough-embeddedEditorBackground": string;
    "statusBar-debuggingBackground": string;
    "statusBar-debuggingForeground": string;
    "statusBar-debuggingBorder": string;
    "debugExceptionWidget-border": string;
    "debugExceptionWidget-background": string;
    "editorGutter-modifiedBackground": string;
    "editorGutter-addedBackground": string;
    "editorGutter-deletedBackground": string;
    "minimapGutter-modifiedBackground": string;
    "minimapGutter-addedBackground": string;
    "minimapGutter-deletedBackground": string;
    "editorOverviewRuler-modifiedForeground": string;
    "editorOverviewRuler-addedForeground": string;
    "editorOverviewRuler-deletedForeground": string;
    "notebook-cellBorderColor": string;
    "notebook-focusedEditorBorder": string;
    "notebookStatusSuccessIcon-foreground": string;
    "notebookStatusErrorIcon-foreground": string;
    "notebookStatusRunningIcon-foreground": string;
    "notebook-outputContainerBackgroundColor": string;
    "notebook-cellToolbarSeparator": string;
    "notebook-selectedCellBackground": string;
    "notebook-selectedCellBorder": string;
    "notebook-focusedCellBorder": string;
    "notebook-inactiveFocusedCellBorder": string;
    "notebook-cellStatusBarItemHoverBackground": string;
    "notebook-cellInsertionIndicator": string;
    "notebookScrollbarSlider-background": string;
    "notebookScrollbarSlider-hoverBackground": string;
    "notebookScrollbarSlider-activeBackground": string;
    "notebook-symbolHighlightBackground": string;
    "editor-stackFrameHighlightBackground": string;
    "editor-focusedStackFrameHighlightBackground": string;
    "debugIcon-breakpointForeground": string;
    "debugIcon-breakpointDisabledForeground": string;
    "debugIcon-breakpointUnverifiedForeground": string;
    "debugIcon-breakpointCurrentStackframeForeground": string;
    "debugIcon-breakpointStackframeForeground": string;
    "editor-inlineValuesForeground": string;
    "editor-inlineValuesBackground": string;
    "ports-iconRunningProcessForeground": string;
    "scm-providerBorder": string;
    "searchEditor-textInputBorder": string;
    "debugTokenExpression-name": string;
    "debugTokenExpression-value": string;
    "debugTokenExpression-string": string;
    "debugTokenExpression-boolean": string;
    "debugTokenExpression-number": string;
    "debugTokenExpression-error": string;
    "debugView-exceptionLabelForeground": string;
    "debugView-exceptionLabelBackground": string;
    "debugView-stateLabelForeground": string;
    "debugView-stateLabelBackground": string;
    "debugView-valueChangedHighlight": string;
    "debugConsole-infoForeground": string;
    "debugConsole-warningForeground": string;
    "debugConsole-errorForeground": string;
    "debugConsole-sourceForeground": string;
    "debugConsoleInputIcon-foreground": string;
    "debugIcon-pauseForeground": string;
    "debugIcon-stopForeground": string;
    "debugIcon-disconnectForeground": string;
    "debugIcon-restartForeground": string;
    "debugIcon-stepOverForeground": string;
    "debugIcon-stepIntoForeground": string;
    "debugIcon-stepOutForeground": string;
    "debugIcon-continueForeground": string;
    "debugIcon-stepBackForeground": string;
    "extensionButton-prominentBackground": string;
    "extensionButton-prominentForeground": string;
    "extensionButton-prominentHoverBackground": string;
    "extensionIcon-starForeground": string;
    "terminal-ansiBlack": string;
    "terminal-ansiRed": string;
    "terminal-ansiGreen": string;
    "terminal-ansiYellow": string;
    "terminal-ansiBlue": string;
    "terminal-ansiMagenta": string;
    "terminal-ansiCyan": string;
    "terminal-ansiWhite": string;
    "terminal-ansiBrightBlack": string;
    "terminal-ansiBrightRed": string;
    "terminal-ansiBrightGreen": string;
    "terminal-ansiBrightYellow": string;
    "terminal-ansiBrightBlue": string;
    "terminal-ansiBrightMagenta": string;
    "terminal-ansiBrightCyan": string;
    "terminal-ansiBrightWhite": string;
    "gitDecoration-addedResourceForeground": string;
    "gitDecoration-modifiedResourceForeground": string;
    "gitDecoration-deletedResourceForeground": string;
    "gitDecoration-renamedResourceForeground": string;
    "gitDecoration-untrackedResourceForeground": string;
    "gitDecoration-ignoredResourceForeground": string;
    "gitDecoration-stageModifiedResourceForeground": string;
    "gitDecoration-stageDeletedResourceForeground": string;
    "gitDecoration-conflictingResourceForeground": string;
    "gitDecoration-submoduleResourceForeground": string;
    "remoteHub-decorations.addedForegroundColor": string;
    "remoteHub-decorations.modifiedForegroundColor": string;
    "remoteHub-decorations.deletedForegroundColor": string;
    "remoteHub-decorations.conflictForegroundColor": string;
    "remoteHub-decorations.incomingAddedForegroundColor": string;
    "remoteHub-decorations.incomingModifiedForegroundColor": string;
    "remoteHub-decorations.incomingDeletedForegroundColor": string;
    "remoteHub-decorations.incomingRenamedForegroundColor": string;
    "remoteHub-decorations.possibleConflictForegroundColor": string;
    "gitlens-gutterBackgroundColor": string;
    "gitlens-gutterForegroundColor": string;
    "gitlens-gutterUncommittedForegroundColor": string;
    "gitlens-trailingLineBackgroundColor": string;
    "gitlens-trailingLineForegroundColor": string;
    "gitlens-lineHighlightBackgroundColor": string;
    "gitlens-lineHighlightOverviewRulerColor": string;
    "gitlens-closedPullRequestIconColor": string;
    "gitlens-openPullRequestIconColor": string;
    "gitlens-mergedPullRequestIconColor": string;
    "gitlens-unpushlishedChangesIconColor": string;
    "gitlens-unpublishedCommitIconColor": string;
    "gitlens-unpulledChangesIconColor": string;
    "gitlens-decorations.addedForegroundColor": string;
    "gitlens-decorations.copiedForegroundColor": string;
    "gitlens-decorations.deletedForegroundColor": string;
    "gitlens-decorations.ignoredForegroundColor": string;
    "gitlens-decorations.modifiedForegroundColor": string;
    "gitlens-decorations.untrackedForegroundColor": string;
    "gitlens-decorations.renamedForegroundColor": string;
    "gitlens-decorations.branchAheadForegroundColor": string;
    "gitlens-decorations.branchBehindForegroundColor": string;
    "gitlens-decorations.branchDivergedForegroundColor": string;
    "gitlens-decorations.branchUnpublishedForegroundColor": string;
    "gitlens-decorations.branchMissingUpstreamForegroundColor": string;
}
