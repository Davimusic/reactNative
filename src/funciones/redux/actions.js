export const updateAudioCurrentTime = (value) => {
    return {
        type: 'UPDATE_AUDIO_CURRENT_TIME',
        payload: value,
    };
};

export const updateAudioDuartion = (value) => {
    //console.log(value);
    return {
        type: 'UPDATE_AUDIO_DURATION',
        payload: value,
    };
};

export const updateIsPlaying = (value) => {
    return {
        type: 'UPDATE_IS_PLAYING',
        payload: value,
    };
};  

export const updateCoor = (value) => {
    return {
        type: 'UPDATE_COOR',
        payload: value,
    };
}; 

export const updateSoundObject = (value) => {
    return {
        type: 'UPDATE_SOUNDOBJECT',
        payload: value,
    };
}; 

export const updateActualScreen = (value) => {
    return {
        type: 'UPDATE_ACTUALSCREEN',
        payload: value,
    };
}; 

export const updateBitRate = (value) => {
    return {
        type: 'UPDATE_BITRATE',
        payload: value,
    };
}; 