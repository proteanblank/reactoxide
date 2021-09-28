import React from 'react'
import {Icon} from './icon'
import EventEmitter from "eventemitter3";
import {FileTreeEntry} from "../../typedefs";

type Props = {
    emitter: EventEmitter<string | symbol, any>;
    fileTreeEntry: FileTreeEntry;
}

export const Copy = (props: Props) => {
    const {emitter, fileTreeEntry} = props;

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // if we don't stop propagation then the click event goes to the file and tries to load it
        e.stopPropagation()
        emitter.emit("DO_COPY_FILE_OR_DIRECTORY", fileTreeEntry)
    }

    return (
        <Icon iconname="IconCopy" tooltip="copy file" onClick={onClick}/>
    )
}
