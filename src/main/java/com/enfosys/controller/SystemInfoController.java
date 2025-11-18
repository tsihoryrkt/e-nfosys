package com.enfosys.controller;

import com.enfosys.service.SystemInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class SystemInfoController {

    @Autowired
    private SystemInfoService systemInfoService;

    @GetMapping("/version")
    public String showing_version() {
        return "version of the application here";
    }

    @GetMapping("/system-info")
    public Map<String, Object> getSystemInfo() throws UnknownHostException {
        Map<String, Object> info = new HashMap<>();
        info.put("hostname", systemInfoService.getHostname());
        info.put("ip", systemInfoService.getIpAddress());
        info.put("docker",systemInfoService.isRunningInDocker());
        info.put("kubernetes",systemInfoService.isRunningInKubernetes());
        return info;
    }
}