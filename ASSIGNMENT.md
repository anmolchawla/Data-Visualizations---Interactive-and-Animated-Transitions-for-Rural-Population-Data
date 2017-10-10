# INF 554 Assignment 8

## Description 
Use the countries of Assignment 1. Load the data in JSON format and implement a D3 bar chart complete with axes, tick marks, and labels. Implement smooth transitions based on user input to reorder the bars: show all bars in alphabetic order (default), ascending order, descending order, show only top 5, show only bottom 5. Update the axes and legend as needed as the chart transitions.

Demonstrate good development practices in README.md (explain set-up & deployment). Publish on your USC SCF account ([see instructions below](#usc-scf-publishing-instructions)) and add a link to the **published** `a8.html` in `README.md`. All files, including `a8.html` should be stored in the repository. Describe the data and cite your source in `a8.html`.

__GIT good practice__

To demonstrate good practice of GIT, do **not** commit your files to GIT after you are done with the whole assignment. Use incremental commits i.e. commit in a small chunk of work. For example, start with a simple bar chart and then commit, work on adding one transition and then commit, add more transitions and then commit, etc.

## Rubric

| 	            | Data Wrangling	| Data Analysis	| Documentation |
| ------------- | --------------- | ------------- | ------------- |
| Sophisticated	|  |  |  |
| Competent	    |  |  |  |
| Needs work	  |  |  |  |

## USC SCF Publishing Instructions 

All USC students are eligible for UNIX Computing Accounts for Students (SCF) accounts. Students that need to access USC UNIX resources may do so using their Student Computing Facility (SCF) accounts. Located at `aludra.usc.edu` and `nunki.usc.edu`, these two servers act as time-sharing hosts for all student accounts. See the [SCF](https://itservices.usc.edu/scf/) page for more details.

You can publish your work in one of several ways:

- Remote login using [SSH](https://itservices.usc.edu/ssh) from a Unix-compatible terminal (On Windows, use [Putty](http://www.putty.org), also available on the [ITS software pages](https://itservices.usc.edu/software/)).
- Connect with [SFTP](https://itservices.usc.edu/sftp) (secure FTP) using a client such as [Filezilla](https://filezilla-project.org). ***Recommended for beginners***
- Use [MobaXterm](http://mobaxterm.mobatek.net/) (support both SSH and SFTP). 

There are three main steps no matter which software you use:

1. Make `public_html` directory (folder) if it does NOT exist
2. Copy your files into `public_html`.
3. Make `public_html` folder and files publicly readable. Check the page is accessible on your browser.

__SSH Example__

```
$ ssh <username>@aludra.usc.edu  # <username> is your USC username as it appears in your USC email address
$ mkdir public_html  # automatically mapped by Apache to http://www-scf.usc.edu/~username
# you will get an error in previous step if that directory already exists
$ cd public_html  # navigate inside public_html directory
$ cat > a8.html  # paste what follows into a8.html; when done pasting, type Ctrl+D to send EOF to close the file
<html>
   <head>
       <title>HTML Page Template</title>
   </head>
   <body>
       Hello!
   </body>
</html>
$ cat > <filename>  # repeat previous step for other files
$ cd ..  # navigate outside public_html directory
$ chmod -R 755 public_html  # make readable by www user for Apache to access 
```

You should be able to see the page by going to: `http://www-scf.usc.edu/~<username>/a8.html`

### References
* https://itservices.usc.edu/scf/
* https://www.youtube.com/watch?v=yfDDw4v0bzY
* http://www.putty.org
* https://filezilla-project.org
* http://mobaxterm.mobatek.net/

## Homework Guidelines
- Homework repository must be updated before the start of next class
- Commits after the submission deadline will not be considered unless requested
- Late policy: 10% of total available points per each 24-hour late; duration less than 24 hours counts as one whole 24-hour
- Homework is expected to work in: SAFARI AND CHROME (Mac), Edge AND CHROME (Windows)
