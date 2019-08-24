#!/usr/bin/perl
# Nexss PROGRAMMER 2.0.0 - Perl
# Default template for JSON Data
# TODO: Sometimes json decodes keys in different order so test fails
use JSON::PP;
use Data::Dumper;
# STDIN
my $nexssStdin = <STDIN>;             # Reading input from STDIN

# Modify Data
my $parsedJson = decode_json($nexssStdin);
# $parsedJson->{perlOutput} = "Hello from Perl! " . $];
$parsedJson->{"test"} = "test";

my $nexssStdout = encode_json ($parsedJson);
print STDOUT "$nexssStdout";
