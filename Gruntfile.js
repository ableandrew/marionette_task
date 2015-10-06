module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'sass/main.scss'
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'css/normalize.css',
                    'css/style.css'
                ],
                dest: 'css/production.css'
            }

        },

        cssmin: {
            css: {
                src: '<%= concat.dist.dest %>',
                dest: 'css/production.min.css'
            }
        },

        uglify: {
            main: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },

        watch: {
            scripts: {
                files: 'sass/*.scss',
                tasks: ['sass'],
                options: {
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['sass','concat', 'cssmin']);

};