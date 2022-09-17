import { useEffect } from "react"

export const useHotkeysPropagationVsCode = () => {
    // https://github.com/microsoft/vscode/issues/65452#issuecomment-586485815
    const handler = (originalEvent: KeyboardEvent) => {
        const serializableEvent = {
            altKey: originalEvent.altKey,
            code: originalEvent.code,
            ctrlKey: originalEvent.ctrlKey,
            isComposing: originalEvent.isComposing,
            key: originalEvent.key,
            location: originalEvent.location,
            metaKey: originalEvent.metaKey,
            repeat: originalEvent.repeat,
            shiftKey: originalEvent.shiftKey
        }
        window.parent.postMessage({type: 'hotkeys-propagation', keyboardEvent: serializableEvent} , '*')
    }
    return useEffect(() => {
        document.addEventListener('keydown', handler);

        return () => document.removeEventListener('keydown', handler);
    });
}