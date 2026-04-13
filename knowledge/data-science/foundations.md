# Data Science Foundations — Tukey, Wickham, Ng, Kozyrkov & CRISP-DM

## In a Nutshell

Data science is detective work, not sorcery. Start by understanding the problem and the data *before* reaching for models. Clean data beats clever algorithms every time. Structure your data tidy from the start and you'll move faster through everything that follows. Every analysis should serve a decision — if no decision changes based on the result, the analysis is waste. The workflow is iterative, not linear: understand → prepare → model → evaluate → loop.

## Source

Five foundational voices, each contributing a different piece of the puzzle:

- **John Tukey** — *Exploratory Data Analysis* (1977). Bell Labs statistician who invented the boxplot, coined "bit" and "software," and argued that data analysis is fundamentally about *discovery*, not confirmation. EDA as a philosophy: look at the data before you test hypotheses.
- **Hadley Wickham** — *Tidy Data* (Journal of Statistical Software, 2014) and *R for Data Science*. Chief Scientist at Posit (formerly RStudio). Created the tidyverse ecosystem. His insight: if you structure data consistently (tidy data), every downstream tool — visualization, modeling, transformation — becomes dramatically easier.
- **Andrew Ng** — Co-founder of Coursera, founder of DeepLearning.AI and Landing AI. Stanford professor. Created the world's most-taken machine learning course (4.8M+ learners). Champion of **data-centric AI**: the idea that improving your data is more impactful than improving your model architecture.
- **Cassie Kozyrkov** — Chief Decision Scientist at Google. Founder of the **decision intelligence** discipline. Trained 15,000+ Googlers in statistical thinking. Her core argument: data science exists to serve decisions, and if you don't define the decision upfront, the analysis will be aimless.
- **CRISP-DM** — Cross-Industry Standard Process for Data Mining (1999). The most widely adopted project framework for data science, used by ~70% of practitioners. Six iterative phases from business understanding to deployment.

## The Principles

### 1. Exploratory Data Analysis — John Tukey

Tukey's revolution: **look at the data before testing hypotheses**. Most of statistics in the 1960s was about confirming preexisting theories. Tukey argued the first job is *discovery* — finding patterns, anomalies, and structures you didn't expect.

The EDA mindset:
- **Be a detective, not a judge.** You're investigating, not prosecuting. Stay open to what the data is telling you, even when it contradicts your hypothesis.
- **Visualize first, calculate second.** A histogram, scatterplot, or boxplot reveals structure that summary statistics hide. Anscombe's Quartet — four datasets with identical means, variances, and correlations but wildly different shapes — proves this conclusively.
- **The "Four R's":**
  - **Reveal** — use graphics to expose patterns
  - **Residuals** — examine what's left after fitting a model; the residuals often contain the real story
  - **Reexpression** — transform data (log, square root, etc.) to make patterns linear and visible
  - **Resistance** — use methods (like medians) that aren't distorted by outliers

Practical takeaway: before building any model or dashboard, spend time plotting the data. Scatter it, histogram it, boxplot it. The 30 minutes you spend here will save you hours of chasing phantom patterns later.

### 2. Tidy Data — Hadley Wickham

A simple structural rule that makes everything downstream faster:

| Principle | Meaning |
|---|---|
| Each **variable** is a column | One type of measurement per column |
| Each **observation** is a row | One unit of analysis per row |
| Each **value** is a cell | One data point per cell |

Why this matters: most real-world data arrives messy — variables crammed into column headers, multiple observations in one row, values scattered across columns. You can either fight this messiness at every step of your analysis, or you can fix it once upfront (make it tidy) and have every subsequent operation just work.

Common messiness patterns Wickham identifies:
- Column headers are values, not variable names (months as columns instead of a "month" column)
- Multiple variables stored in one column ("M-35" encoding both sex and age)
- Variables stored in both rows and columns
- Multiple types of observational units in one table

The investment in tidying data upfront pays compound returns. Every visualization, summary, model, and join becomes a one-liner instead of a custom transformation.

### 3. Data-Centric AI — Andrew Ng

Ng's argument, developed through Landing AI and his production ML courses: **the AI community has been too focused on model architectures and not focused enough on data quality.**

The traditional approach: hold data constant, iterate on models (try different architectures, tune hyperparameters, add layers). Ng's alternative:

**Hold the model constant, iterate on the data.**

What this means in practice:
- Start with a reasonable baseline model (even a simple one)
- Conduct **error analysis** — look at the cases where the model fails and categorize why
- Improve the data: fix label inconsistencies, add examples of underrepresented cases, clean noisy samples, synthesize training data for edge cases
- Retrain on improved data and evaluate
- Repeat

Ng's striking finding: a small, clean, consistently labeled dataset often outperforms a massive noisy one. For many real-world problems (especially with limited data), improving data quality by 10% beats improving the model by 10%.

This is especially relevant for solo builders: you don't have Google's compute budget to train massive models, but you *can* curate excellent data. Data quality is the equalizer.

### 4. Decision Intelligence — Cassie Kozyrkov

Kozyrkov's core provocation: **data science exists to serve decisions, not to produce analyses.**

The framework:
- Before starting any analysis, ask: **"What decision will this inform?"** If no one can articulate the decision, the analysis shouldn't happen.
- Define the **decision criteria** upfront — what result would make you take Action A vs. Action B? If you don't know this before you look at the data, you'll reverse-engineer a justification for whatever the data shows (confirmation bias).
- **Three types of decisions:**
  1. **Type 1 — already decided, need data to confirm.** (Validation)
  2. **Type 2 — undecided, need data to choose between options.** (Analysis)
  3. **Type 3 — don't know the options yet, need data to explore.** (EDA / discovery)
- Match your method to the decision type. Don't bring a neural network to a "should we raise prices?" question.

The acid test: after the analysis is complete, ask *"What action did we take that we wouldn't have taken without this?"* If the answer is "none," the analysis was waste — no matter how elegant the model or beautiful the visualization.

### 5. The CRISP-DM Lifecycle

The most widely adopted framework for structuring data science projects. Six phases, explicitly iterative:

```
┌─────────────────────┐
│ Business Understanding │ ← What problem are we solving? For whom?
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Data Understanding   │ ← What data exists? What's its quality? What's missing?
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Data Preparation     │ ← Clean, transform, structure (the 80% of the work)
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Modeling             │ ← Select techniques, train, tune
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Evaluation           │ ← Does it actually solve the business problem?
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Deployment           │ ← Put it in production, monitor, maintain
└─────────────────────┘
```

Critical nuances:
- **The arrows go backward too.** Modeling reveals you need different features → back to Data Preparation. Evaluation reveals the wrong problem → back to Business Understanding. This is expected, not failure.
- **Business Understanding is first for a reason.** Skipping it — jumping straight to data and models — is the #1 cause of data science project failure. Define what success looks like before touching data.
- **Data Preparation is 50–80% of total project time.** This isn't a bug; it's reality. Accepting this upfront prevents frustration and bad estimates.
- **Evaluation is against the business problem, not just model metrics.** A model with 99% accuracy that doesn't change any decision is worthless. A model with 75% accuracy that saves $1M in fraud is invaluable.

### 6. Feature Engineering

The art of creating input variables that help models see the signal. Domain knowledge beats automated feature generation nearly every time.

Core principles:
- **Start with domain knowledge** — what would a human expert look at to make this decision? Those are your first features.
- **Occam's razor** — the simplest features that capture the pattern are the best. A "days since last purchase" feature often beats a complex recency-frequency-monetary embedding.
- **Prevent data leakage** — the #1 silent killer of models. If your feature includes information from the future (or from the label), your model will look amazing in training and fail in production. Split data *before* engineering features.
- **Test features, not just models** — add one feature, measure the impact. Features that don't improve performance add noise and complexity.

### 7. Model Selection

Match model complexity to the problem and data:

| Situation | Approach |
|---|---|
| Small data, need interpretability | Linear/logistic regression, decision trees |
| Medium data, moderate complexity | Random forests, gradient boosting (XGBoost, LightGBM) |
| Large data, complex patterns | Neural networks, deep learning |
| Don't know yet | Start simple, add complexity only when simple fails |

Key rules:
- **No single metric tells the whole story.** Use accuracy *and* precision *and* recall. Check the confusion matrix. Look at performance across subgroups.
- **Simple models fail predictably; complex models fail mysteriously.** When stakes are high and interpretability matters (healthcare, finance, legal), lean simple.
- **Cross-validate everything.** A model evaluated on the same data it trained on is lying to you. K-fold cross-validation is the minimum standard.
- **The best model is the one that gets deployed.** A perfect model stuck in a notebook is worth less than a good-enough model in production.

### 8. Data Quality

**Prevention beats detection.** It's cheaper to validate data at the point of collection than to clean it after the fact.

The reality: U.S. businesses lose an estimated $3+ trillion annually to poor data quality. Data scientists spend ~80% of their time on data preparation and cleaning. Accepting this is step one; reducing it is step two.

Key practices:
- **Define quality criteria upfront** — accuracy, completeness, consistency, timeliness. What does "good enough" look like for each?
- **Validate at ingestion** — schema checks, range checks, null checks at the point data enters your system. Don't store garbage and try to clean it later.
- **Monitor for drift** — data that was correct last month may not represent reality this month. Distributions shift, sources change, definitions evolve.
- **Document data lineage** — where did this number come from? What transformations were applied? If you can't trace a value back to its source, you can't trust it.

### 9. Communicating Results

The best analysis in the world is worthless if the stakeholder doesn't understand it, believe it, or act on it.

Principles:
- **Know your audience** — a CEO, a product manager, and a data engineer need the same result delivered three different ways. Adjust depth, jargon, and format.
- **Lead with the decision** — "We should do X because the data shows Y" beats "We ran a logistic regression with L2 regularization and an AUC of 0.87."
- **Tell a story** — Duarte's framework applies here too. Start with the current reality ("what is"), show the data insight ("what could be"), end with the recommended action ("new bliss").
- **Visualize honestly** — apply Tufte's principles. No chartjunk, no lie factors, sparklines over gauges. Let the data speak.
- **Make the next step concrete** — "I recommend we [specific action] by [specific date], which we expect to [specific outcome]." Vague recommendations produce zero action.

## How I Apply It

- **Bifrost and product analytics:** Start every metrics question with Kozyrkov's test: "What decision will this inform?" If no decision, skip the analysis and move on to something that matters.
- **Data structure:** Keep data tidy from ingestion. Variables as columns, observations as rows, every value in its own cell. This makes every downstream query, chart, and model easier to build.
- **Before building dashboards:** Do EDA first (Tukey). Plot the distributions, check for outliers, look for unexpected patterns. The 30 minutes of exploration often reveals that the dashboard I planned to build isn't the dashboard I *should* build.
- **Model decisions:** Start simple (Andrew Ng). Linear models and basic aggregations first. Only reach for complex models when simple ones demonstrably fail. Iterate on data quality before model complexity.
- **Project structure:** Use CRISP-DM as a mental checklist, not a rigid waterfall. Business Understanding first — always. If I can't explain the business problem in one sentence, I'm not ready to touch data.
- **Communicating results:** Apply Duarte's storytelling framework to data presentations. Lead with the insight, not the methodology. Show one chart that tells the story, not ten charts that show the work.

## Related

- [Dashboard & Infographic Design](../design/dashboard-design.md) — Tufte's visualization principles are the natural output layer for data science work. Analyze with Tukey and Wickham's principles; display with Tufte's.
- [Typography](../design/typography.md) — Data presentations and dashboards rely on clear type hierarchy. Tabular figures, readable body text, and consistent sizing make data trustworthy at a glance.
- [Resonate — Big Idea, Sparkline, STAR Moments](../storytelling/nancy-duarte-resonate.md) — Communicating data results follows the same Sparkline structure: here's the current reality, here's what the data shows is possible, here's what we should do about it.
- [Shape Up](../playbooks/shape-up.md) — CRISP-DM's iterative phases parallel Shape Up's shaping → betting → building cycle. Both emphasize understanding the problem (business understanding / shaping) before committing resources (modeling / building).
- [Minimum Effective Dose](../principles/minimum-effective-dose.md) — Ng's data-centric approach *is* MED for machine learning: improve the smallest, highest-leverage input (data quality) rather than throwing compute at complexity.
