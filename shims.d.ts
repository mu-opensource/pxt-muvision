// Auto-generated. Do not edit.



    //% color="#ff6600" weight=50 icon="\uf110"
declare namespace muvision {

    /**
     * Initialize MU.
     */
    //% blockId=mu3_begin block="init %id|interface %port"
    //% group="Settings" shim=muvision::begin
    function begin(id: mu_id_t, port: MuVsMode): void;

    /**
     * Reset MU.
     */
    //% blockId=mu3_reset block="%id|restore default settings"
    //% group="Settings" shim=muvision::reset
    function reset(id: mu_id_t): void;

    /**
     * MU vision begin.
     */
    //% blockId=mu3_vision_begin block="%id|%enable|algorithm%type"
    //% weight=50
    //% group="Settings" shim=muvision::visionBegin
    function visionBegin(id: mu_id_t, status: mu_status_t, type: MuVsMessageVisionType): void;

    /**
     * set led color.
     * @param id MU id
     * @param led led type.
     * @param detected_color led color while sensor detected target.
     * @param undetected_color led color while sensor undetected target.
     * @param level led brightness, form 0(close) to 15
     */
    //% blockId=mu3_led_set_color block="%id|LED %led|when detected %detected_color|when undetected %undetected_color"
    //% weight=200 inlineInputMode=inline
    //% group="Settings" advanced=true shim=muvision::ledSetColor
    function ledSetColor(id: mu_id_t, led: MuVsLed, detected_color: MuVsLedColor, undetected_color: MuVsLedColor): void;

    /**
     * set vision level.
     * @param id MU id
     * @param type vision type
     * @param level vision level
     */
    //% blockId=mu3_vision_set_level block="%id|algorithm%VISION_TYPE|Level%level"
    //% weight=96
    //% group="Settings" advanced=true shim=muvision::visionSetLevel
    function visionSetLevel(id: mu_id_t, type: MuVsMessageVisionType, level: MuVsVisionLevel): void;

    /**
     * set camera zoom.
     * @param id MU id
     * @param zoom zoom value.
     */
    //% blockId=mu3_camera_set_zoom block="%id|digital zoom%level"
    //% weight=95
    //% group="Settings" advanced=true shim=muvision::cameraSetZoom
    function cameraSetZoom(id: mu_id_t, zoom: MuVsCameraZoom): void;

    /**
     * set camera white balance.
     * @param id MU id
     * @param wb white balance type.
     */
    //% blockId=mu3_camera_set_awb block="%id|white balance%wb"
    //% weight=93
    //% group="Settings" advanced=true shim=muvision::cameraSetAwb
    function cameraSetAwb(id: mu_id_t, wb: MuVsCameraWhiteBalance): void;

    /**
     * set camera FPS.
     * @param id MU id
     * @param on FPS type.
     */
    //% blockId=mu3_camera_set_fps block="%id|high FPS mode$on"
    //% on.shadow="toggleOnOff" on.defl="true"
    //% group="Settings" advanced=true on.defl=1 shim=muvision::cameraSetFPS
    function cameraSetFPS(id: mu_id_t, on?: boolean): void;

    /**
     * Enable/Disable light sensor function,gesture detect can not used with other functions.
     * @param id MU id
     * @param status enable/disable function
     * @param[in] ls_type Function type
     */
    //% blockId=MU3LsBegin block="%id|light sensor|%status|%ls_type"
    //% group="Light Sensor" shim=muvision::lsBegin
    function lsBegin(id: mu_id_t, status: mu_status_t, ls_type: mu_ls_t): void;

    /**
     * Light snesor set sensitivity.
     * @param id MU id
     * @param sensitivity sensitivity
     */
    //% blockId=MU3LsSetSensitivity block="%id|light sensor|set sensitivity%sensitivity"
    //% group="Light Sensor" shim=muvision::lsSetSensitivity
    function lsSetSensitivity(id: mu_id_t, sensitivity: MuVsLsSensitivity): void;

    /**
     * @brief Read proximity data.
     * @param id MU id
     * @retval proximity data, 0~255.
     */
    //% blockId=MU3LsReadProximity block="%id|light sensor|read proximity"
    //% group="Light Sensor" shim=muvision::lsReadProximity
    function lsReadProximity(id: mu_id_t): uint8;

    /**
     * @brief Read ambient light sensor data.
     * @param id MU id
     * @retval ambient light sensor data, 0~65536.
     */
    //% blockId=MU3LsReadAmbientLight block="%id|light sensor|read ambient light"
    //% group="Light Sensor" shim=muvision::lsReadAmbientLight
    function lsReadAmbientLight(id: mu_id_t): uint16;

    /**
     * get vision result data, this function will update vision result automatically.
     * @param id MU id
     * @param vision_type: vision type.
     * @param object_inf:  object information
     */
    //% blockId=mu3_get_value shim=muvision::getValue
    function getValue(id: mu_id_t, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf): int32;

    /**
     * @brief  write vision parameter.
     * @param id MU id
     * @param vision_type vision type.
     * @param object_inf  object information
     * @param value  value
     */
    //% blockId=mu3_write shim=muvision::write
    function write(id: mu_id_t, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf, value: uint8): void;

    /**
     * @brief Read gesture sensor data.
     * @retval Gesture witch MU detected.
     */
    //% blockId=mu3_ls_read_gesture shim=muvision::lsReadGesture
    function lsReadGesture(id: mu_id_t): MuVsLsGesture;
}



    //% color="#11ACEF" icon="\uf1eb"
declare namespace muvisionAT {

    /**
     * Read SIP 
     */
    //% blockId=MU3ATWifiSIP block="MU|read SIP"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiSIP
    function wifiSIP(): string;

    /**
     * Read CIP 
     */
    //% blockId=MU3ATWifiCIP block="MU|read CIP"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiCIP
    function wifiCIP(): string;

    /**
     * MU AT wifi set
     */
    //% blockId=MU3ATWifiSet block="MU|WiFi set|ssid|%ssid|password|%password|apmode|%apmode"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiSet
    function wifiSet(ssid: string, password: string, apmode: mu3at_mode_t): void;

    /**
     * MU AT wifi connect, return `true`=success
     */
    //% blockId=MU3ATWifiCon block="MU|WiFi connect|%status"
    //% status.shadow="toggleOnOff" status.defl="true"
    //% group="MUVisionSensor3_AT" status.defl=1 shim=muvisionAT::wifiCon
    function wifiCon(status?: boolean): boolean;

    /**
     * MU AT wifi set target IP&port 
     */
    //% blockId=MU3ATWifiUDP block="MU|WiFi set target IP|%ip|port|%port"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiUDP
    function wifiUDP(ip: string, port: string): void;

    /**
     * MU AT wifi read data 
     */
    //% blockId=MU3ATWifiRead block="MU|WiFi read"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiRead
    function wifiRead(): int32;
}

// Auto-generated. Do not edit. Really.