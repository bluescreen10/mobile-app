'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json') ,
        connect: {
            server: {
                options: {
                    port: 8001 ,
                    hostname: 'localhost' ,
                    base: '.' ,
                    keepalive: true
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-connect');
};
