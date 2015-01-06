module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            enb: {
                command: './node_modules/enb/bin/enb make --no-cache'
            }
        },
        copy: {
            blocks: {
                files: {
                    "out/": ["desktop.blocks/**/*"]
                }
            },
            bundles: {
                files: {
                    "out/": ["desktop.bundles/index/*"]
                }
            },
            data: {
                files: {
                    "out/": ["data/*"]
                }
            },
            cname: {
                files: {
                    "out/": ["./CNAME"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

}
