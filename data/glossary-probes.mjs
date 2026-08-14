/**
 * A probe for every glossary entry.
 *
 * The brief was that each effect in the glossary should have a test designed for
 * it, rather than a definition the reader nods along to. The problem with a
 * glossary of biases is that reading one produces the bias blind spot: every
 * entry lands as a description of other people. A probe is the correction — it
 * asks the reader to commit to an answer before the explanation is visible.
 *
 * Three kinds, and the kind is not decoration. It governs what the probe is
 * allowed to claim:
 *
 *   demo      — the effect can be run on the reader in one question, and their
 *               answer is evidence about them. Anchoring, the conjunction
 *               fallacy, the Forer effect. These are the honest self-tests.
 *
 *   judgement — the probe puts the reader in a scenario where the effect would
 *               operate, and their answer indicates a leaning. It cannot prove
 *               the effect operated, because there is no control condition and
 *               a single reader is n=1. The reveal says so where it matters.
 *
 *   audit     — the probe asks what the reader already believes, then shows them
 *               the record. This is the only permissible kind for entries whose
 *               status is `failed`, and it is often right for `contested` ones
 *               too. Designing a probe that appears to demonstrate ego depletion
 *               would be a lie told with a quiz.
 *
 * Every probe carries a `reveal`. Where an effect is disputed, the reveal says
 * what is disputed rather than reporting the headline finding as settled — the
 * glossary's status field and this file must not contradict each other, and a
 * test is checked at build time that they do not.
 */

export const PROBES = {
  // ── Judgement under uncertainty ───────────────────────────────────────────
  anchoring: {
    kind: 'demo',
    ask: 'The Mississippi is longer than 800 miles. Without looking it up, how long is it?',
    options: [
      { id: 'a', label: 'Around 1,000–1,500 miles', tell: 'Pulled toward the 800 you were just handed. The river is about 2,340 miles.' },
      { id: 'b', label: 'Around 1,500–2,000 miles', tell: 'Still short, and the anchor is the likeliest reason — it was the only number in the room.' },
      { id: 'c', label: 'Over 2,000 miles', tell: 'You resisted it, or you knew the answer. Only the first counts as evidence.' },
    ],
    reveal:
      'The 800 carries no information — it was chosen to be low. Jacowitz and Kahneman found the '
      + 'anchor moves estimates even when subjects are told it was generated at random, and even when '
      + 'they are warned. Knowing about anchoring does not reliably protect you from it; deciding your '
      + 'range before you see anyone else\'s number does.',
  },
  'availability-heuristic': {
    kind: 'demo',
    ask: 'In an average year, which kills more people worldwide — sharks, or falling coconuts?',
    options: [
      { id: 'a', label: 'Sharks, clearly', tell: 'The vivid one. Sharks kill roughly 5–10 people a year worldwide.' },
      { id: 'b', label: 'Coconuts, clearly', tell: 'You have heard this one — the coconut figure is itself an unsourced legend, which is the deeper lesson.' },
      { id: 'c', label: 'I have no idea and would not guess', tell: 'The correct answer for both. Neither number is well measured, and the question was built to feel answerable.' },
    ],
    reveal:
      'Both figures are folklore. What the question actually tests is whether a vivid category feels '
      + 'countable. Tversky and Kahneman\'s point was not that people are wrong about sharks, but that '
      + 'ease of recall substitutes for frequency without the substitution being noticed — which is why '
      + 'a plane crash reshapes risk perception and a year of car journeys does not.',
  },
  representativeness: {
    kind: 'demo',
    ask: 'Someone is quiet, tidy and reads a great deal. Are they more likely to be a librarian or a lorry driver?',
    options: [
      { id: 'a', label: 'A librarian', tell: 'The description matches the stereotype. It does not match the population.' },
      { id: 'b', label: 'A lorry driver', tell: 'Correct, and for the unglamorous reason: there are far more lorry drivers.' },
    ],
    reveal:
      'In most countries lorry drivers outnumber librarians by more than twenty to one, so even if the '
      + 'description is four times commoner among librarians, the tidy reader is still probably driving '
      + 'a lorry. Resemblance feels like evidence because it is evidence — it is just much weaker than '
      + 'the base rate it is competing with.',
  },
  'conjunction-fallacy': {
    kind: 'demo',
    ask: 'A candidate wins a seat. Which is more likely — that they raised over £1m, or that they raised over £1m and had prior national media exposure?',
    options: [
      { id: 'a', label: 'Raised over £1m', tell: 'Correct. A set cannot be smaller than a set containing it.' },
      { id: 'b', label: 'Raised over £1m and had media exposure', tell: 'The second is a subset of the first, so it cannot be likelier. The story was doing the work.' },
    ],
    reveal:
      'Adding detail makes a scenario more plausible-sounding and strictly less probable at the same '
      + 'time. Tversky and Kahneman found majorities picking the conjunction even among graduate students '
      + 'in decision science. This is why a forecast with a vivid causal chain attached should be trusted '
      + 'less than the vague one, not more.',
  },
  'base-rate-neglect': {
    kind: 'demo',
    ask: 'A test for a disease affecting 1 in 1,000 people is 95% accurate. You test positive. What is the chance you have it?',
    options: [
      { id: 'a', label: 'About 95%', tell: 'The most common answer. It reads the accuracy figure as the answer.' },
      { id: 'b', label: 'About 50%', tell: 'Closer in spirit — you sensed the base rate mattered — but still far too high.' },
      { id: 'c', label: 'About 2%', tell: 'Right. In 1,000 people there is 1 true positive and about 50 false ones.' },
    ],
    reveal:
      'The rarity of the disease dominates the accuracy of the test, and almost nobody feels this. '
      + 'Gigerenzer showed the error largely dissolves when the same problem is stated in natural '
      + 'frequencies rather than percentages — which suggests the failure is one of representation as '
      + 'much as reasoning, and that the fix is to restate the problem in counts.',
  },
  'gamblers-fallacy': {
    kind: 'demo',
    ask: 'A fair coin has landed heads eight times running. What is the chance the ninth is tails?',
    options: [
      { id: 'a', label: 'Better than half — it is due', tell: 'The gambler\'s fallacy. The coin has no memory of the eight.' },
      { id: 'b', label: 'Exactly half', tell: 'Correct, if the coin is genuinely fair.' },
      { id: 'c', label: 'Worse than half — the coin may be biased', tell: 'The Bayesian answer, and defensible: eight heads is weak evidence against fairness.' },
    ],
    reveal:
      'The stated answer is half, but the third option is the one worth arguing about. If you are not '
      + 'certain the coin is fair, a run is evidence, and updating toward more heads is correct. The '
      + 'fallacy is not "considering the streak" — it is expecting an independent process to compensate '
      + 'for its own past.',
  },
  'hot-hand': {
    kind: 'audit',
    ask: 'Do you believe a basketball player who has just made three shots is more likely to make the next one?',
    options: [
      { id: 'a', label: 'Yes — streaks are real', tell: 'The intuition of nearly every player and coach, dismissed for thirty years, now partly vindicated.' },
      { id: 'b', label: 'No — it is a cognitive illusion', tell: 'The textbook answer since 1985, and the one the recent statistics have undercut.' },
    ],
    reveal:
      'Gilovich, Vallone and Tversky found no hot hand in 1985 and it became the standard example of '
      + 'pattern-seeing. In 2018 Miller and Sanjurjo identified a selection bias in that method — '
      + 'conditioning on a streak biases the estimate downward — and correcting it restored a modest '
      + 'effect. Its size and how far it generalises beyond shooting remain disputed, so the lesson to '
      + 'take is not "streaks are real" but that a famous debunking can itself need debunking.',
  },
  'regression-to-the-mean': {
    kind: 'judgement',
    ask: 'Pilots praised after an excellent landing tend to do worse next time; pilots shouted at after a bad one tend to improve. What does this show?',
    options: [
      { id: 'a', label: 'Criticism works better than praise', tell: 'The conclusion the instructors drew, and the one Kahneman was told.' },
      { id: 'b', label: 'Nothing about praise or criticism at all', tell: 'Correct. Extreme performances are followed by less extreme ones whatever you say afterwards.' },
    ],
    reveal:
      'Kahneman described this as the moment he understood that the world rewards punishing others and '
      + 'punishes rewarding them — not because it is true, but because regression guarantees the '
      + 'appearance. Any intervention applied only at the extremes will appear to work. This is why '
      + 'a control group is not a formality.',
  },
  'survivorship-bias': {
    kind: 'judgement',
    ask: 'Returning bombers show most damage on the wings and fuselage. Where should the extra armour go?',
    options: [
      { id: 'a', label: 'Wings and fuselage — where the hits are', tell: 'The intuitive answer, and the one Wald was hired to overturn.' },
      { id: 'b', label: 'The engines — where the returning planes show no damage', tell: 'Correct. Planes hit there did not come back to be measured.' },
    ],
    reveal:
      'Abraham Wald\'s insight was that the sample was assembled by survival. The same structure sits '
      + 'under most advice from successful people: the dropouts who founded nothing are not interviewed. '
      + 'The question to ask of any dataset is not what it contains but what could not have got into it.',
  },
  'simpsons-paradox': {
    kind: 'judgement',
    ask: 'A treatment has a better recovery rate than the alternative in mild cases and in severe cases, but a worse rate overall. Which should a patient choose?',
    options: [
      { id: 'a', label: 'The treatment — it wins in both groups', tell: 'Usually right, if severity is what drives assignment.' },
      { id: 'b', label: 'The alternative — the overall figure is the real one', tell: 'Almost always wrong: the aggregate is confounded by who received what.' },
      { id: 'c', label: 'Impossible to say without knowing why patients were assigned', tell: 'The rigorous answer. The causal structure decides which number to read.' },
    ],
    reveal:
      'The reversal happens when the better treatment is given disproportionately to the sicker patients. '
      + 'Pearl\'s point is that no amount of staring at the table resolves it — you need to know how the '
      + 'groups were formed. Statistics alone cannot tell you which of the two contradictory answers is '
      + 'the one about the world.',
  },
  'berksons-paradox': {
    kind: 'judgement',
    ask: 'Among people you have dated, the kind ones tend to be less attractive and the attractive ones less kind. What does that suggest?',
    options: [
      { id: 'a', label: 'There is a real trade-off between the two', tell: 'The intuitive read, and the one the sample cannot support.' },
      { id: 'b', label: 'It is an artefact of who you agreed to date', tell: 'Correct. You dated people who cleared a bar on the sum of the two.' },
    ],
    reveal:
      'Selecting on a combination of two traits induces a negative correlation between them within the '
      + 'selected group, even when they are independent in the population. Berkson found it in hospital '
      + 'records. It quietly manufactures trade-offs in any dataset built from admissions, hiring, '
      + 'or anything else with a threshold.',
  },
  'prosecutors-fallacy': {
    kind: 'demo',
    ask: 'A DNA match has a 1-in-a-million false positive rate. A search of a 10-million-person database returns one match. How likely is it the right person?',
    options: [
      { id: 'a', label: 'Almost certain — one in a million', tell: 'The prosecutor\'s reading, and the one that has sent people to prison.' },
      { id: 'b', label: 'Roughly one in ten', tell: 'The right order of magnitude: about 10 false matches are expected in a database that size.' },
    ],
    reveal:
      'The probability of the evidence given innocence is not the probability of innocence given the '
      + 'evidence, and a database search inverts the intuition entirely because you have given the rare '
      + 'event ten million chances to occur. Sally Clark\'s conviction turned on a version of this error '
      + 'and was quashed after the Royal Statistical Society intervened.',
  },
  'streetlight-effect': {
    kind: 'judgement',
    ask: 'You want to know whether a policy improved lives. Which do you actually measure?',
    options: [
      { id: 'a', label: 'The outcomes the department already collects monthly', tell: 'Available, comparable, and quite possibly measuring the wrong thing.' },
      { id: 'b', label: 'Something you would have to build an instrument to observe', tell: 'Expensive, slow, and the only version that answers the question you asked.' },
    ],
    reveal:
      'Neither answer is wrong on its own; the failure is forgetting which one you took. The drunk under '
      + 'the streetlight is not stupid — searching where you can see is rational. The error is concluding '
      + 'that the keys are not there.',
  },
  'mcnamara-fallacy': {
    kind: 'judgement',
    ask: 'Your team\'s numbers are all up and morale is visibly collapsing. What do you report?',
    options: [
      { id: 'a', label: 'The numbers — morale is not measurable', tell: 'Defensible and how most reporting works. It is also how the failure begins.' },
      { id: 'b', label: 'Both, and say the second is unquantified', tell: 'Harder to write and the only honest version.' },
      { id: 'c', label: 'Morale — the numbers are lagging indicators', tell: 'Risky in the other direction: an unmeasured claim can be anything you want it to be.' },
    ],
    reveal:
      'Daniel Yankelovich set out the sequence: measure what can be measured, disregard what cannot, '
      + 'presume what cannot be measured is unimportant, then say it does not exist. Body counts rose '
      + 'in Vietnam throughout. The fallacy is not measurement — it is the fourth step.',
  },

  // ── Confidence and self-knowledge ─────────────────────────────────────────
  overconfidence: {
    kind: 'demo',
    ask: 'Give a range you are 90% sure contains the wingspan of a Boeing 747. How wide did you make it?',
    options: [
      { id: 'a', label: 'A tight range — I know roughly', tell: 'Almost everyone does this, and almost everyone misses. It is about 68 metres.' },
      { id: 'b', label: 'A very wide range — 20 to 150 metres', tell: 'The correct behaviour for a 90% interval about something you do not know.' },
    ],
    reveal:
      'Across calibration studies, ranges people label 90% confident contain the answer roughly 50% of '
      + 'the time. The fix is not to know more but to widen: a genuine 90% interval about an unfamiliar '
      + 'quantity should feel embarrassingly loose. If it does not feel absurd, it is not 90%.',
  },
  'dunning-kruger': {
    kind: 'audit',
    ask: 'What do you take the Dunning–Kruger effect to say?',
    options: [
      { id: 'a', label: 'Incompetent people think they are experts', tell: 'The popular version, and not what the data show. Bottom-quartile performers rate themselves near average.' },
      { id: 'b', label: 'Everyone rates themselves near average, so the worst overestimate most', tell: 'Much closer to the published finding.' },
    ],
    reveal:
      'The original paper found self-assessment is weakly related to performance across the whole range, '
      + 'which mechanically produces the largest overestimate at the bottom — and an underestimate at the '
      + 'top, a half of the finding the meme drops. Nuhfer and others have shown much of the curve can be '
      + 'reproduced from random data, so treat the effect as real but far smaller than the internet\'s version.',
  },
  'planning-fallacy': {
    kind: 'demo',
    ask: 'Think of your current project. When will it be finished — and when was the last comparable one finished relative to its plan?',
    options: [
      { id: 'a', label: 'On time; the last one overran', tell: 'The signature of the effect: the past is treated as not applying to this case.' },
      { id: 'b', label: 'Late, by roughly the same margin as last time', tell: 'You are using the outside view, which is the only thing that has been shown to work.' },
    ],
    reveal:
      'Buehler and colleagues found students predicting their own thesis completion missed even their '
      + '"worst case" dates, while predicting other people\'s accurately. The correction is reference-class '
      + 'forecasting: ignore the plan, take the distribution of similar projects, and start there.',
  },
  'hindsight-bias': {
    kind: 'demo',
    ask: 'Before you knew the outcome of the last election you followed, what probability did you give the winner?',
    options: [
      { id: 'a', label: 'High — it was fairly clear', tell: 'Check whether you wrote it down. Almost nobody\'s recalled forecast is lower than their actual one.' },
      { id: 'b', label: 'I recorded it and can check', tell: 'The only version of this answer worth anything.' },
      { id: 'c', label: 'I genuinely cannot reconstruct it', tell: 'The most honest answer available without a record.' },
    ],
    reveal:
      'Fischhoff showed people cannot recover their prior uncertainty once they know the answer, and '
      + 'cannot suppress the knowledge when instructed to. This is why post-mortems find negligence '
      + 'everywhere, and why a forecast is worth almost nothing unless it was written down before.',
  },
  'curse-of-knowledge': {
    kind: 'demo',
    ask: 'Tap out a well-known tune on the table. What fraction of listeners will name it?',
    options: [
      { id: 'a', label: 'About half', tell: 'The typical estimate. The tune is playing in your head and you cannot subtract it.' },
      { id: 'b', label: 'Under 5%', tell: 'Right. Newton found listeners identified about 2.5%.' },
    ],
    reveal:
      'Elizabeth Newton\'s tappers predicted 50% and got 2.5%. This is the mechanism behind most bad '
      + 'documentation and most bad teaching: the writer cannot simulate not knowing, so the gap reads '
      + 'as the reader\'s inattention rather than the writer\'s compression.',
  },
  'illusion-of-explanatory-depth': {
    kind: 'demo',
    ask: 'Rate your understanding of how a flush toilet works, then explain the mechanism step by step. Did the rating survive?',
    options: [
      { id: 'a', label: 'It dropped once I tried to explain', tell: 'The standard result, and the reason the probe asks you to attempt it.' },
      { id: 'b', label: 'It held — I could explain it', tell: 'Then you have knowledge rather than familiarity. The two feel identical from inside.' },
    ],
    reveal:
      'Rozenblit and Keil found ratings fall sharply after an attempted explanation and stay lower. '
      + 'Fernbach extended it to policy: asking people to explain a policy mechanically, rather than '
      + 'justify it, reduced the extremity of their position — one of the few interventions on '
      + 'polarisation that has replicated at all.',
  },

  // ── Belief and evidence ───────────────────────────────────────────────────
  'confirmation-bias': {
    kind: 'demo',
    ask: 'Cards show A, K, 4, 7. The rule is "vowel on one side means even number on the other". Which cards must you turn?',
    options: [
      { id: 'a', label: 'A and 4', tell: 'The most common answer and wrong: turning 4 cannot break the rule whatever is behind it.' },
      { id: 'b', label: 'A and 7', tell: 'Correct. You must look for the case that would falsify.' },
      { id: 'c', label: 'A only', tell: 'Half the job — you checked the confirming instance and stopped.' },
    ],
    reveal:
      'Wason found around 10% get this. The same people solve it instantly when it is phrased as "if '
      + 'someone is drinking beer they must be over 18" — identical logic, and now everyone checks the '
      + 'teenager. The deficit is not in logic but in which case occurs to you to check.',
  },
  'myside-bias': {
    kind: 'judgement',
    ask: 'A study finds a result you dislike. What is your first move?',
    options: [
      { id: 'a', label: 'Check the methodology', tell: 'Correct — and ask whether you check it as hard when the result pleases you.' },
      { id: 'b', label: 'Check who funded it', tell: 'Legitimate, and the most common asymmetrically applied test.' },
      { id: 'c', label: 'Update toward the result', tell: 'The rarest answer, and the one the word "evidence" is supposed to mean.' },
    ],
    reveal:
      'Stanovich\'s finding is the uncomfortable one: myside bias is essentially uncorrelated with '
      + 'intelligence, education and open-minded thinking measures. Being clever does not protect you; it '
      + 'equips you to construct better objections to things you did not want to hear.',
  },
  'backfire-effect': {
    kind: 'audit',
    ask: 'Does correcting someone\'s false belief tend to strengthen it?',
    options: [
      { id: 'a', label: 'Yes — this is well established', tell: 'The widely repeated version. It did not survive.' },
      { id: 'b', label: 'No — corrections usually work a little', tell: 'What the larger studies found.' },
    ],
    reveal:
      'Nyhan and Reifler reported a backfire effect in 2010 and it became folk wisdom about political '
      + 'argument. It did not replicate: Wood and Porter tested 52 issues with over 10,000 subjects and '
      + 'found it almost nowhere, and Nyhan himself has since described the effect as rare. Corrections '
      + 'mostly work slightly and rarely change votes — a duller finding, and the one to hold.',
  },
  'illusory-truth': {
    kind: 'demo',
    ask: 'You have seen a claim four times and know it is disputed. Does it feel more true than the first time?',
    options: [
      { id: 'a', label: 'Yes, and that unsettles me', tell: 'The honest answer, and the effect operating in plain view.' },
      { id: 'b', label: 'No — knowing it is disputed inoculates me', tell: 'Fazio found repetition raised believability even for statements subjects knew to be false.' },
    ],
    reveal:
      'Processing fluency is mistaken for evidence: the repeated claim is easier to think, and easy '
      + 'feels true. Fazio and colleagues showed the effect survives prior knowledge. This is the '
      + 'mechanism a disinformation campaign is actually buying, and why repeating a falsehood in order '
      + 'to debunk it is a genuine risk.',
  },
  'semmelweis-reflex': {
    kind: 'judgement',
    ask: 'A junior colleague presents data showing your team\'s core practice is harmful. Your first response?',
    options: [
      { id: 'a', label: 'Question their competence and the data', tell: 'Reasonable in form. Note whether you would apply the same scrutiny to supporting data.' },
      { id: 'b', label: 'Ask what would need to be true for them to be right', tell: 'The move that keeps the question open rather than closing it.' },
      { id: 'c', label: 'Escalate it above them', tell: 'Procedurally sound and the most common way an inconvenient finding is buried.' },
    ],
    reveal:
      'Semmelweis showed handwashing cut maternal deaths from around 18% to 2% and was rejected, '
      + 'dismissed, and died in an asylum. The rejection was not irrational in isolation — he had no '
      + 'germ theory to offer — which is what makes the reflex dangerous: it always has a respectable '
      + 'reason available.',
  },

  // ── Value, risk and choice ────────────────────────────────────────────────
  'prospect-theory': {
    kind: 'demo',
    ask: 'Choose: a certain £900, or a 90% chance of £1,000. Then: a certain loss of £900, or a 90% chance of losing £1,000.',
    options: [
      { id: 'a', label: 'Certain gain, then gamble on the loss', tell: 'The modal pattern: risk-averse for gains, risk-seeking for losses.' },
      { id: 'b', label: 'The gamble both times', tell: 'Consistent, and closer to expected-value neutrality.' },
      { id: 'c', label: 'The certain option both times', tell: 'Consistently risk-averse, which costs you on the loss side.' },
    ],
    reveal:
      'Both pairs have identical expected values, and most people switch. Kahneman and Tversky\'s value '
      + 'function is concave for gains and convex for losses, which is why the same person buys insurance '
      + 'and lottery tickets. The reference point, not the final state, is what is being evaluated.',
  },
  'loss-aversion': {
    kind: 'audit',
    ask: 'How large is the loss-aversion coefficient — how much worse does a loss feel than an equal gain?',
    options: [
      { id: 'a', label: 'About twice as bad, universally', tell: 'The textbook 2.25 figure, now the disputed part.' },
      { id: 'b', label: 'It depends heavily on stake size and context', tell: 'Closer to where the argument currently stands.' },
    ],
    reveal:
      'Gal and Rucker argued the strong form is not supported and that many classic demonstrations are '
      + 'better explained by inertia or by the endowment effect being about ownership rather than loss. '
      + 'Something real remains for large stakes; the universal 2:1 multiplier does not. This is the '
      + 'most-cited idea in behavioural economics and it is genuinely in dispute.',
  },
  'endowment-effect': {
    kind: 'demo',
    ask: 'You are given a mug. What is the least you would sell it for? If you had not been given it, what is the most you would pay?',
    options: [
      { id: 'a', label: 'My selling price is clearly higher', tell: 'The classic gap — usually around 2:1 in the original studies.' },
      { id: 'b', label: 'They are about the same', tell: 'What tends to happen with experienced traders and with better-designed procedures.' },
    ],
    reveal:
      'Kahneman, Knetsch and Thaler found a large gap; List found it shrinks or vanishes among people who '
      + 'trade regularly, and Plott and Zeiler argued much of it is an artefact of how the task is '
      + 'explained. The effect is real in inexperienced subjects and much less general than it was sold as.',
  },
  'framing-effect': {
    kind: 'demo',
    ask: 'A treatment has a 90% survival rate. Another has a 10% mortality rate. Which sounds better?',
    options: [
      { id: 'a', label: 'The 90% survival one', tell: 'The usual answer. They are the same number.' },
      { id: 'b', label: 'They are identical and I feel no difference', tell: 'Rare. Physicians shown these framings choose differently too.' },
    ],
    reveal:
      'McNeil and colleagues found both patients and doctors preferred surgery over radiation when '
      + 'outcomes were framed as survival rather than mortality. The framing is not a communication '
      + 'problem to be tidied up — every presentation is a frame, so the question is always which frame '
      + 'was chosen and by whom.',
  },
  'sunk-cost': {
    kind: 'judgement',
    ask: 'You are ninety minutes into a bad three-hour film you paid for. Do you leave?',
    options: [
      { id: 'a', label: 'Stay — I paid for it', tell: 'The money is gone whether you sit there or not. You are now spending time to honour it.' },
      { id: 'b', label: 'Leave', tell: 'The economically correct answer, and the one most people find genuinely hard.' },
      { id: 'c', label: 'Stay — I might still enjoy the ending', tell: 'A forward-looking reason, and therefore not the fallacy at all.' },
    ],
    reveal:
      'Only the first answer is the fallacy: the third is a real expected-value judgement. Arkes and '
      + 'Blumer\'s theatre-ticket studies isolate this cleanly. Note that the fallacy has a defensible '
      + 'cousin — honouring commitments so that your future promises remain credible — which is a '
      + 'forward-looking reason wearing backward-looking clothes.',
  },
  'hyperbolic-discounting': {
    kind: 'demo',
    ask: 'Prefer £100 today or £110 next week? Then: £100 in a year, or £110 in a year and a week?',
    options: [
      { id: 'a', label: 'Today, then the later £110', tell: 'A preference reversal from the same one-week delay. This is the effect.' },
      { id: 'b', label: 'The £110 both times', tell: 'Consistent discounting, and unusual.' },
      { id: 'c', label: 'The earlier option both times', tell: 'Also consistent — a steep but stable discount rate.' },
    ],
    reveal:
      'A week costs you £10 when it is this week and nothing when it is a year away, which means your '
      + 'preferences will reverse as the date approaches. This is why commitment devices work: your '
      + 'present self correctly does not trust the self who will be standing there on the day.',
  },
  'default-effect': {
    kind: 'judgement',
    ask: 'Organ donation consent rates are 15% in one country and 99% in a neighbouring one. What best explains it?',
    options: [
      { id: 'a', label: 'Cultural attitudes to death and the body', tell: 'The intuitive explanation, and mostly wrong for these pairs.' },
      { id: 'b', label: 'One country asks you to opt in and the other to opt out', tell: 'Correct. Johnson and Goldstein found the form design dominates.' },
    ],
    reveal:
      'Austria and Germany, Sweden and Denmark: near-identical cultures, opposite rates, different default. '
      + 'The uncomfortable implication is that on questions where preferences are weakly formed, whoever '
      + 'designs the form is choosing the outcome — so "we just let people decide" is never a neutral position.',
  },
  'decoy-effect': {
    kind: 'demo',
    ask: 'Digital £59, print £125, print+digital £125. Which do you take?',
    options: [
      { id: 'a', label: 'Print and digital — obviously', tell: 'The option the middle one exists to sell. Print-alone is there to be rejected.' },
      { id: 'b', label: 'Digital only', tell: 'What most people choose when the pointless middle option is removed.' },
    ],
    reveal:
      'Ariely\'s Economist example: with the decoy, 84% took the bundle; without it, 68% took digital '
      + 'alone. The decoy is dominated and nobody buys it — its job is to make the target look like a '
      + 'win. Replications are mixed and the effect weakens with real money, but the pricing page you '
      + 'saw this morning was built on it.',
  },
  'choice-overload': {
    kind: 'audit',
    ask: 'Does offering more options make people less likely to buy?',
    options: [
      { id: 'a', label: 'Yes — the jam study proved it', tell: 'The famous result, and one that has not held up in aggregate.' },
      { id: 'b', label: 'Sometimes, under specific conditions', tell: 'Where the evidence actually sits.' },
    ],
    reveal:
      'Iyengar and Lepper\'s 24-versus-6 jams study is one of the most cited in the field. Scheibehenne\'s '
      + 'meta-analysis of 50 experiments found a mean effect near zero, with large effects in both '
      + 'directions depending on time pressure, preference clarity and whether the options are hard to '
      + 'compare. Treat it as a moderator story, not a law.',
  },
  'peak-end-rule': {
    kind: 'demo',
    ask: 'Which is worse: 60 seconds of hand in ice water, or the same 60 seconds followed by 30 seconds at a slightly less cold temperature?',
    options: [
      { id: 'a', label: 'The longer one — it is strictly more pain', tell: 'True by any additive measure, and not what people remember or choose.' },
      { id: 'b', label: 'The shorter one', tell: 'What subjects reported, and most chose to repeat the longer trial.' },
    ],
    reveal:
      'Kahneman\'s cold-pressor study found the remembering self ignores duration almost entirely and '
      + 'averages the peak with the end. This puts the experiencing self and the remembering self in '
      + 'direct conflict about what to choose next — and it is the remembering self that books the holiday.',
  },
  'focusing-illusion': {
    kind: 'demo',
    ask: 'Would you be happier living in California?',
    options: [
      { id: 'a', label: 'Yes — the weather and the light', tell: 'The weather is what the question makes salient. It is a small part of a day.' },
      { id: 'b', label: 'Probably about the same', tell: 'What the data show: Midwesterners and Californians report near-identical life satisfaction.' },
    ],
    reveal:
      'Schkade and Kahneman found both groups predicted Californians would be happier, and neither was. '
      + 'The illusion generalises: any factor you are asked to attend to inflates in importance while you '
      + 'attend to it, which is why the thing you are currently worrying about feels decisive and mostly is not.',
  },
  'impact-bias': {
    kind: 'demo',
    ask: 'How long would a major setback — losing a job, a relationship ending — measurably lower your happiness?',
    options: [
      { id: 'a', label: 'Years', tell: 'The common prediction. Most events\' measured effect decays much faster.' },
      { id: 'b', label: 'A few months', tell: 'Closer to the affective-forecasting data for most events.' },
    ],
    reveal:
      'Gilbert and Wilson call the machinery the psychological immune system: people underestimate their '
      + 'own capacity to reframe. The exceptions matter — bereavement, chronic pain and long-term '
      + 'unemployment show much slower or incomplete adaptation — so this is a bias about typical events, '
      + 'not a promise about all of them.',
  },
  'ikea-effect': {
    kind: 'judgement',
    ask: 'You built a feature over three weeks. Usage data says nobody touches it. Do you remove it?',
    options: [
      { id: 'a', label: 'Keep it — it needs better discovery', tell: 'Sometimes true, and exactly what the effect predicts you would say.' },
      { id: 'b', label: 'Remove it', tell: 'The answer you would give instantly about someone else\'s three weeks.' },
    ],
    reveal:
      'Norton, Mochon and Ariely found people paid substantially more for furniture and origami they had '
      + 'assembled themselves, and rated their own output close to experts\'. Replications are mixed on '
      + 'size, and the effect depends on completing the task — abandoned builds do not get the premium.',
  },
  'scarcity-tax': {
    kind: 'audit',
    ask: 'Does being short of money make people worse at unrelated decisions?',
    options: [
      { id: 'a', label: 'Yes — scarcity itself consumes mental bandwidth', tell: 'Mullainathan and Shafir\'s claim, and the basis for a lot of policy argument.' },
      { id: 'b', label: 'The effect is smaller and less clear than reported', tell: 'Where several replication attempts have landed.' },
    ],
    reveal:
      'The sugarcane-farmer study reported a cognitive gap before and after harvest equivalent to many IQ '
      + 'points. Subsequent replications have been mixed, and the effect size is disputed. The policy '
      + 'implication — that means-testing imposes a cost on exactly the people least able to bear it — '
      + 'survives on other grounds even where the specific finding wobbles.',
  },
  'zero-price-effect': {
    kind: 'demo',
    ask: 'Choose: a Lindt truffle for 15p, or a Hershey\'s Kiss for 1p. Now: the truffle for 14p, or the Kiss free.',
    options: [
      { id: 'a', label: 'Truffle, then Kiss', tell: 'The reversal. The price gap is identical in both pairs.' },
      { id: 'b', label: 'Truffle both times', tell: 'Consistent, and the minority.' },
    ],
    reveal:
      'Shampanier, Mazar and Ariely found the truffle\'s share collapsing from 73% to 31% when the '
      + 'alternative became free, with the difference in price held constant. Free removes the downside '
      + 'entirely and so removes the comparison — which is why "free trial" and "free shipping" outperform '
      + 'equivalent discounts.',
  },

  // ── Self and others ───────────────────────────────────────────────────────
  'fundamental-attribution-error': {
    kind: 'demo',
    ask: 'A driver cuts you up. Then you cut someone up. Explain each.',
    options: [
      { id: 'a', label: 'They are aggressive; I was in a hurry', tell: 'The asymmetry, verbatim. Character for them, circumstance for you.' },
      { id: 'b', label: 'Both of us were probably in a hurry', tell: 'The symmetric read, which requires deliberately supplying the situation you cannot see.' },
    ],
    reveal:
      'Jones and Harris found observers inferred genuine attitudes from essays even when told the writer '
      + 'had been assigned the position. Note the asymmetry is partly informational — you know your own '
      + 'situation and not theirs — which is why the fix is to assume a situation exists rather than to '
      + 'assume good character.',
  },
  'self-serving-bias': {
    kind: 'judgement',
    ask: 'Your team ships a hit and then a flop. Write the two post-mortems in your head. Do they use the same vocabulary?',
    options: [
      { id: 'a', label: 'No — the hit is "we", the flop is "the market"', tell: 'The bias in its ordinary form, and it is nearly universal in annual reports.' },
      { id: 'b', label: 'Yes, both name decisions we made', tell: 'The version that produces learning, and the rarer one.' },
    ],
    reveal:
      'Studies of shareholder letters find the pattern reliably: good years are attributed internally, '
      + 'bad years to conditions. The bias is not lying — the causes really are mixed — it is that the '
      + 'search for causes stops at a different point depending on the result.',
  },
  'minimal-group': {
    kind: 'demo',
    ask: 'You are assigned to Group A by a coin toss. You allocate money between an A and a B. Do you favour A?',
    options: [
      { id: 'a', label: 'No — the groups are meaningless', tell: 'What everyone predicts about themselves.' },
      { id: 'b', label: 'Probably a little, if I am honest', tell: 'What subjects actually did, on a basis as thin as a coin.' },
    ],
    reveal:
      'Tajfel found favouritism on categories as arbitrary as a preference between two painters, and '
      + 'subjects often chose relative advantage for their group over maximum absolute gain for it. '
      + 'No history, no competition, no contact — the category alone was sufficient.',
  },
  'out-group-homogeneity': {
    kind: 'demo',
    ask: 'How many meaningfully different positions exist within the political side you oppose?',
    options: [
      { id: 'a', label: 'Two or three broad camps', tell: 'Compare with how many you would list for your own side.' },
      { id: 'b', label: 'As many as within my own side', tell: 'Almost certainly true, and almost never how it feels.' },
    ],
    reveal:
      'The asymmetry is a sampling artefact with consequences: you meet your own group in variety and the '
      + 'other through its loudest representatives. It sustains the belief that the other side has a '
      + 'position rather than an argument, which is the precondition for treating disagreement as bad faith.',
  },
  'false-consensus': {
    kind: 'demo',
    ask: 'What share of the country do you think agrees with you on the political issue you care most about?',
    options: [
      { id: 'a', label: 'A clear majority', tell: 'The usual estimate, and it correlates with your own position rather than the polling.' },
      { id: 'b', label: 'A minority', tell: 'Rarer, and where it happens it can invert into the false-uniqueness version.' },
      { id: 'c', label: 'I would have to look it up', tell: 'The only answer with a defensible method behind it.' },
    ],
    reveal:
      'Ross, Greene and House found people on both sides of a question estimated their own side larger, '
      + 'and rated those who disagreed as more extreme and more revealing of their character. The estimate '
      + 'and the derogation come as a pair.',
  },
  'pluralistic-ignorance': {
    kind: 'judgement',
    ask: 'In a meeting, everyone nods at a plan you think is bad. What do you conclude?',
    options: [
      { id: 'a', label: 'I am missing something', tell: 'The inference that keeps the silence stable, especially when several people make it at once.' },
      { id: 'b', label: 'Others may be thinking the same and staying quiet', tell: 'The possibility that only costs one person something to test.' },
    ],
    reveal:
      'Prentice and Miller found students consistently overestimated their peers\' comfort with campus '
      + 'drinking, each privately uneasy and each reading the others\' silence as endorsement. The norm '
      + 'was held in place by nobody\'s actual belief. One person stating a private view can collapse it.',
  },
  'spiral-of-silence': {
    kind: 'judgement',
    ask: 'You hold a view you believe is unpopular in your workplace. Do you state it?',
    options: [
      { id: 'a', label: 'No — the cost is real and the benefit is not', tell: 'A rational individual calculation that aggregates into an inaccurate public picture.' },
      { id: 'b', label: 'Yes, and take the consequences', tell: 'What Noelle-Neumann called the hard core, who speak regardless of the climate.' },
      { id: 'c', label: 'Only to people I trust', tell: 'The most common answer, and it keeps the public estimate wrong while feeling like candour.' },
    ],
    reveal:
      'Noelle-Neumann\'s theory holds that perceived minority status produces silence, which further '
      + 'shrinks the apparent minority. Evidence is mixed — effects are modest and depend on issue '
      + 'salience and how public the setting is — but the mechanism is visible in any organisation where '
      + 'the private and public distributions of opinion have come apart.',
  },
  'social-proof': {
    kind: 'judgement',
    ask: 'Two restaurants, both unknown to you. One is full, one is empty. Which do you enter?',
    options: [
      { id: 'a', label: 'The full one', tell: 'Rational information aggregation — other diners know something you do not.' },
      { id: 'b', label: 'The empty one', tell: 'Also defensible: quicker service, and the crowd may be a cascade rather than evidence.' },
    ],
    reveal:
      'Following the crowd under uncertainty is usually correct, which is what makes it exploitable — '
      + 'Cialdini\'s hotel-towel studies show descriptive norms outperform environmental appeals. The '
      + 'failure mode is that the crowd may be copying each other rather than knowing anything, which is '
      + 'the information cascade in this same glossary.',
  },
  'halo-effect': {
    kind: 'judgement',
    ask: 'A CEO is articulate, well dressed and tells a good story. How much does that shift your estimate of the company\'s finances?',
    options: [
      { id: 'a', label: 'Not at all — different things entirely', tell: 'What everyone says, and what the ratings data contradict.' },
      { id: 'b', label: 'Some, and I notice it happening', tell: 'The honest version. Noticing is the only available correction.' },
    ],
    reveal:
      'Thorndike found officers\' ratings of unrelated traits in their men correlated far too highly to be '
      + 'independent judgements. Rosenzweig\'s The Halo Effect applies it to business writing: performance '
      + 'is measured first, then the culture and leadership are described to match, and the resulting '
      + '"causes of success" are largely the outcome read backwards.',
  },
  'mere-exposure': {
    kind: 'demo',
    ask: 'Think of a song you disliked and now like. What changed?',
    options: [
      { id: 'a', label: 'I heard it enough times', tell: 'Zajonc\'s effect, unassisted by any new information about the song.' },
      { id: 'b', label: 'I understood it better', tell: 'Possible — and hard to distinguish from familiarity, which is the problem.' },
    ],
    reveal:
      'Zajonc found liking rises with repeated exposure even for meaningless stimuli and even below the '
      + 'threshold of recognition. It is the cheapest thing advertising buys. It also means your sense of '
      + 'which ideas are reasonable is shaped by how often you have encountered them.',
  },

  // ── Groups ────────────────────────────────────────────────────────────────
  groupthink: {
    kind: 'audit',
    ask: 'Do cohesive, agreeable teams make worse decisions than fractious ones?',
    options: [
      { id: 'a', label: 'Yes — cohesion suppresses dissent', tell: 'Janis\'s claim, drawn from case studies chosen because they ended badly.' },
      { id: 'b', label: 'Not reliably; cohesion is not the key variable', tell: 'What the experimental literature has mostly found.' },
    ],
    reveal:
      'Janis built the theory from famous fiascos — the Bay of Pigs, Pearl Harbor — and the method '
      + 'selects on the outcome. Laboratory tests find weak and inconsistent support for cohesion as the '
      + 'driver; directive leadership and insulation from outside information hold up better. The '
      + 'prescriptions are sensible even where the theory behind them is shaky.',
  },
  'group-polarisation': {
    kind: 'judgement',
    ask: 'A group that mildly agrees on something discusses it for an hour. Where does the average position end up?',
    options: [
      { id: 'a', label: 'Nearer the centre — they will hear caveats', tell: 'The intuitive prediction and the wrong one.' },
      { id: 'b', label: 'Further out than where it started', tell: 'The reliable finding, across juries, judges and online groups.' },
    ],
    reveal:
      'Sunstein\'s work on three-judge panels found judges voted more ideologically when sitting with two '
      + 'appointees of the same party than when sitting alone. The mechanism is not pressure but the '
      + 'argument pool: a like-minded group supplies mostly arguments in one direction, and hearing them '
      + 'is genuinely persuasive.',
  },
  'abilene-paradox': {
    kind: 'judgement',
    ask: 'Your team is going ahead with something you privately think is a mistake. How many others do you think agree with you?',
    options: [
      { id: 'a', label: 'Probably nobody', tell: 'The assumption that makes the paradox possible.' },
      { id: 'b', label: 'Possibly most of them', tell: 'Harvey\'s point: agreement is often unanimous and invisible.' },
    ],
    reveal:
      'Harvey\'s family drove fifty miles to Abilene for a bad meal that nobody had wanted, each '
      + 'agreeing to spare the others. Unlike groupthink the problem is not pressure to conform but '
      + 'failure to manage agreement: nobody was persuaded of anything and everyone went along.',
  },
  'bystander-effect': {
    kind: 'audit',
    ask: 'Are you less likely to be helped in an emergency if many people are present?',
    options: [
      { id: 'a', label: 'Yes — responsibility diffuses', tell: 'The textbook finding, from Darley and Latané and the Genovese story.' },
      { id: 'b', label: 'For non-dangerous situations; in real violence, more bystanders helps', tell: 'What the video evidence shows.' },
    ],
    reveal:
      'Philpot and colleagues analysed CCTV of real public conflicts across three countries and found '
      + 'intervention in about 90% of cases, with more bystanders raising the chance someone acted — the '
      + 'opposite of the textbook prediction. The laboratory effect replicates for ambiguous, low-cost '
      + 'situations and does not generalise to danger. The Genovese reporting that launched the field was '
      + 'itself substantially inaccurate.',
  },

  // ── Memory and learning ───────────────────────────────────────────────────
  'misinformation-effect': {
    kind: 'demo',
    ask: 'Witnesses are asked how fast cars were going when they "smashed" versus "hit". A week later, who remembers broken glass?',
    options: [
      { id: 'a', label: 'The "smashed" group, though there was none', tell: 'Loftus and Palmer\'s finding. One verb rewrote the memory.' },
      { id: 'b', label: 'Neither — there was no glass', tell: 'What should happen, and did not.' },
    ],
    reveal:
      'Loftus and Palmer found both speed estimates and later false memories varied with the verb. '
      + 'Memory is reconstructive, so every retelling is an opportunity to edit — which is why leading '
      + 'questions in police interviews are a procedural problem and not merely a stylistic one.',
  },
  'flashbulb-memory': {
    kind: 'demo',
    ask: 'How confident are you in your memory of where you were during a major news event?',
    options: [
      { id: 'a', label: 'Very — I can see the room', tell: 'Confidence stays near ceiling. Accuracy does not.' },
      { id: 'b', label: 'Confident, but I know that means little', tell: 'The calibrated answer, and it takes effort to hold.' },
    ],
    reveal:
      'Talarico and Rubin collected accounts the day after 11 September and again months later: '
      + 'consistency decayed at the same rate as ordinary memories, while confidence and vividness did '
      + 'not. Vividness is a feeling about a memory, not a property of its accuracy — which is why '
      + 'confident eyewitnesses are so persuasive and so unreliable.',
  },
  'spacing-effect': {
    kind: 'judgement',
    ask: 'You have six hours to learn something. How do you spend them?',
    options: [
      { id: 'a', label: 'Six hours the day before', tell: 'Feels more effective while doing it, and produces the worst retention.' },
      { id: 'b', label: 'One hour a day for six days', tell: 'Substantially better long-term retention for the same total time.' },
    ],
    reveal:
      'One of the oldest and best-replicated findings in psychology, from Ebbinghaus onward. The trap is '
      + 'that massed practice feels more fluent during the session, so learners rate it higher while '
      + 'performing worse a week later. The subjective sense of learning is a poor guide to learning.',
  },
  'testing-effect': {
    kind: 'judgement',
    ask: 'You have read a chapter once. What next?',
    options: [
      { id: 'a', label: 'Read it again', tell: 'What most students do, and the weakest use of the time.' },
      { id: 'b', label: 'Close it and write down what you remember', tell: 'Retrieval practice, and substantially better retention.' },
    ],
    reveal:
      'Roediger and Karpicke found students who re-read rated their own learning higher and performed '
      + 'markedly worse a week later than students who tested themselves. Retrieval is not measurement of '
      + 'learning; it is the mechanism of it. This probe is itself an application.',
  },
  'zeigarnik-effect': {
    kind: 'audit',
    ask: 'Do unfinished tasks stay in mind more than completed ones?',
    options: [
      { id: 'a', label: 'Yes, reliably', tell: 'The popular claim, used to justify cliffhangers and to-do systems.' },
      { id: 'b', label: 'Sometimes, and the replication record is uneven', tell: 'The more defensible position.' },
    ],
    reveal:
      'Zeigarnik\'s 1927 waiter study is much cited and the follow-up literature is inconsistent, with '
      + 'several failed replications and effects that depend heavily on task involvement. Something in the '
      + 'vicinity is probably real — the specific, dependable effect that productivity writing invokes is not.',
  },
  'serial-position': {
    kind: 'demo',
    ask: 'You interview eight candidates in a day. Which do you remember most clearly?',
    options: [
      { id: 'a', label: 'The first and the last', tell: 'Primacy and recency. Candidates four and five are structurally disadvantaged.' },
      { id: 'b', label: 'The best one, whenever they came', tell: 'What you believe, and what the recall curve does not support.' },
    ],
    reveal:
      'The effect is among the most robust in memory research. The practical implication is that '
      + 'position in a sequence is a hidden variable in hiring, judging and grading — which is why '
      + 'structured scoring immediately after each candidate outperforms deciding at the end of the day.',
  },

  // ── The replication crisis ────────────────────────────────────────────────
  'ego-depletion': {
    kind: 'audit',
    ask: 'Is willpower a finite resource that gets used up during the day?',
    options: [
      { id: 'a', label: 'Yes — this is well established', tell: 'The version in a decade of self-help books. It did not replicate.' },
      { id: 'b', label: 'No — the effect largely vanished under pre-registration', tell: 'What the multi-lab tests found.' },
    ],
    reveal:
      'Baumeister\'s finding was supported by hundreds of studies and a meta-analysis. A registered '
      + 'replication with 23 labs and around 2,000 subjects found an effect near zero, and the earlier '
      + 'meta-analysis showed strong signs of publication bias. This entry exists as a warning about how '
      + 'much apparent evidence a false effect can accumulate.',
  },
  'power-posing': {
    kind: 'audit',
    ask: 'Does standing in an expansive posture for two minutes change your hormones and risk appetite?',
    options: [
      { id: 'a', label: 'Yes — the TED talk showed the data', tell: 'The talk has been viewed tens of millions of times. The hormonal finding did not replicate.' },
      { id: 'b', label: 'No, though it may change how you feel', tell: 'Where the evidence sits, including per one of the original authors.' },
    ],
    reveal:
      'Ranehill and colleagues, with a much larger sample, found no hormonal or behavioural effect. '
      + 'Dana Carney, the first author of the original, publicly stated she no longer believes the effect '
      + 'is real and listed the methodological problems. Self-reported feelings of power do shift, which '
      + 'is a far smaller claim than the one that travelled.',
  },
  'elderly-priming': {
    kind: 'audit',
    ask: 'Does reading words associated with old age make people walk more slowly?',
    options: [
      { id: 'a', label: 'Yes — a famous demonstration of unconscious priming', tell: 'It anchored a whole literature and failed direct replication.' },
      { id: 'b', label: 'No, and the replication explains why it looked real', tell: 'Correct. The follow-up is more instructive than the original.' },
    ],
    reveal:
      'Doyen and colleagues failed to replicate with automated timing, then reproduced the original '
      + 'result when experimenters were told what to expect — implicating experimenter expectancy rather '
      + 'than priming. Kahneman\'s open letter to the field followed. Behavioural priming is the clearest '
      + 'case of a body of work that did not survive.',
  },
  'facial-feedback': {
    kind: 'audit',
    ask: 'Does holding a pen in your teeth, forcing a smile, make cartoons funnier?',
    options: [
      { id: 'a', label: 'Yes — a classic result', tell: 'Strack\'s 1988 finding, taught for thirty years.' },
      { id: 'b', label: 'The evidence is now genuinely mixed', tell: 'The accurate summary after two rounds of multi-lab testing.' },
    ],
    reveal:
      'A 17-lab replication found no effect. A later many-labs study using a different procedure and '
      + 'avoiding a camera found a small one. The current position is unresolved rather than settled '
      + 'either way — which is a more honest place to leave it than the confident version in either '
      + 'direction.',
  },
  'marshmallow-test': {
    kind: 'audit',
    ask: 'Does a four-year-old\'s ability to wait for a second marshmallow predict their adult outcomes?',
    options: [
      { id: 'a', label: 'Yes — famously, decades out', tell: 'The version in every parenting book. The original samples were tiny.' },
      { id: 'b', label: 'Weakly, and mostly through family background', tell: 'What the large replication found.' },
    ],
    reveal:
      'Watts, Duncan and Quan retested with roughly ten times the sample and controls for family '
      + 'background: the association shrank to about a third and lost significance with controls. '
      + 'Waiting also tracks whether a child has learned that promises are kept — Kidd showed children in '
      + 'unreliable environments wait less, rationally.',
  },
  'stereotype-threat': {
    kind: 'audit',
    ask: 'Does being reminded of a negative stereotype about your group lower test performance?',
    options: [
      { id: 'a', label: 'Yes — a well-established effect', tell: 'Widely taught and widely applied in education policy.' },
      { id: 'b', label: 'The literature shows strong signs of publication bias', tell: 'What the meta-analytic corrections suggest.' },
    ],
    reveal:
      'Steele and Aronson\'s original result is heavily cited. Meta-analyses correcting for small-study '
      + 'effects find much smaller effects, and several large replications found none. The underlying '
      + 'phenomenon may be real in specific conditions; the general claim is not as solid as its '
      + 'presence in teacher training implies.',
  },
  'growth-mindset': {
    kind: 'audit',
    ask: 'Does teaching students that ability is malleable raise their achievement?',
    options: [
      { id: 'a', label: 'Substantially — it is transformative', tell: 'The claim that drove worldwide adoption.' },
      { id: 'b', label: 'Very slightly, and mainly for at-risk students', tell: 'What the large pre-registered trials found.' },
    ],
    reveal:
      'The US National Study of Learning Mindsets, with over 12,000 students, found a small effect '
      + 'concentrated in lower-achieving students — real, replicable, and far below the headline. A large '
      + 'UK trial found no significant effect. The honest summary is a cheap intervention with a modest, '
      + 'targeted benefit, which is not what was sold to schools.',
  },
  'broken-windows': {
    kind: 'audit',
    ask: 'Does policing minor disorder reduce serious crime?',
    options: [
      { id: 'a', label: 'Yes — New York proved it', tell: 'The claim, made during a period when crime fell across cities that did nothing similar.' },
      { id: 'b', label: 'Disorder-focused community policing helps; aggressive stop-and-frisk does not', tell: 'Where the meta-analytic evidence points.' },
    ],
    reveal:
      'Braga\'s meta-analyses find modest crime reductions from disorder-focused strategies, with the '
      + 'effect coming from community problem-solving rather than aggressive misdemeanour enforcement, '
      + 'which shows no consistent benefit and substantial social cost. New York\'s decline coincided with '
      + 'declines in cities using opposite policies.',
  },

  // ── Razors, laws and models ───────────────────────────────────────────────
  'occams-razor': {
    kind: 'judgement',
    ask: 'Two theories fit the data equally well. One is simpler. Is the simpler one more likely true?',
    options: [
      { id: 'a', label: 'Yes — fewer assumptions, fewer ways to be wrong', tell: 'The usable version, and there is a formal argument for it.' },
      { id: 'b', label: 'No — reality is not obliged to be simple', tell: 'Also true, and the reason the razor is a heuristic and not a law.' },
    ],
    reveal:
      'The Bayesian defence is real: a theory with more free parameters spreads its probability over more '
      + 'possible datasets, so it is penalised for flexibility. The razor is a tiebreaker among theories '
      + 'that fit equally, not a licence to prefer the simple story over the one that fits better.',
  },
  'hanlons-razor': {
    kind: 'judgement',
    ask: 'You were left off an important invitation. What happened?',
    options: [
      { id: 'a', label: 'Someone made a point of excluding me', tell: 'Possible, and the hypothesis that costs most if wrong.' },
      { id: 'b', label: 'Someone copied last month\'s distribution list', tell: 'Usually right, and cheap to check.' },
    ],
    reveal:
      'The razor is a prior, not a verdict — and it has a real failure mode: applied institutionally, '
      + '"incompetence" becomes the standing explanation for patterns that are actually produced by '
      + 'incentives. Ask whether the same incompetence would have occurred if the error had gone the '
      + 'other way.',
  },
  'hitchens-razor': {
    kind: 'judgement',
    ask: 'Someone makes a sweeping claim and offers no evidence. Must you refute it?',
    options: [
      { id: 'a', label: 'No — dismiss it', tell: 'Hitchens\'s rule, and it correctly places the burden.' },
      { id: 'b', label: 'Yes, or silence looks like agreement', tell: 'The practical reality in public argument, which is what makes the razor hard to use.' },
    ],
    reveal:
      'The razor is epistemically right and rhetorically weak, which is the tension Brandolini\'s law '
      + 'describes from the other side. It also has a limit: not everything asserted without evidence in '
      + 'a conversation is unevidenced — sometimes the speaker simply has not been asked.',
  },
  'goodharts-law': {
    kind: 'judgement',
    ask: 'A hospital is measured on A&E waiting times. What happens?',
    options: [
      { id: 'a', label: 'Waiting times fall and care improves', tell: 'The intended outcome, and part of what happens.' },
      { id: 'b', label: 'Waiting times fall and patients are moved to trolleys in corridors', tell: 'The documented outcome. The measure improved; the thing it stood for did not.' },
    ],
    reveal:
      'Strathern\'s formulation is the famous one. The law is not an argument against measurement — you '
      + 'cannot manage what you cannot see — but against using a single proxy as the target. The '
      + 'defence is multiple measures, changed periodically, with someone still looking at the corridors.',
  },
  'campbells-law': {
    kind: 'judgement',
    ask: 'Teacher pay is tied to test scores. What changes first?',
    options: [
      { id: 'a', label: 'Teaching quality', tell: 'The intent, and it is what happens in the first year, before the incentive is understood.' },
      { id: 'b', label: 'What is taught, then how scores are produced', tell: 'The documented sequence, up to and including erasure scandals.' },
    ],
    reveal:
      'Campbell\'s version is specifically about social indicators used for decisions, and it predicts '
      + 'both narrowing and outright corruption of the measurement process. The Atlanta cheating '
      + 'convictions are the extreme case; curriculum narrowing is the ordinary one and is much harder '
      + 'to see in the data, because the data is what narrowed.',
  },
  'cobra-effect': {
    kind: 'judgement',
    ask: 'A bounty is offered per venomous snake killed. What do you predict?',
    options: [
      { id: 'a', label: 'Fewer snakes', tell: 'The design intent, and it holds until someone notices the bounty is a business.' },
      { id: 'b', label: 'Snake farms, and more snakes when the bounty ends', tell: 'The story the effect is named for.' },
    ],
    reveal:
      'The Delhi cobra anecdote is likely apocryphal, but the structure is well documented elsewhere — '
      + 'Hanoi\'s rat-tail bounty produced tailless rats, and paying for fossil fragments produced smashed '
      + 'fossils. Any bounty on a proxy creates a market for producing the proxy, and the market is often '
      + 'faster than the policy.',
  },
  'jevons-paradox': {
    kind: 'judgement',
    ask: 'Engines become 30% more efficient. What happens to total fuel use?',
    options: [
      { id: 'a', label: 'It falls', tell: 'True if demand is fixed, which it rarely is.' },
      { id: 'b', label: 'It can rise, because efficiency makes use cheaper', tell: 'Jevons\'s observation about coal in 1865.' },
    ],
    reveal:
      'Efficiency lowers the effective price of a service, and lower prices raise demand. Whether the '
      + 'rebound exceeds 100% is contested and depends on the sector — for domestic lighting and heating '
      + 'in rich countries it does not, for industrial energy it sometimes has. The paradox is a reason '
      + 'to price the externality rather than only to improve the technology.',
  },
  'streisand-effect': {
    kind: 'judgement',
    ask: 'An unflattering article about you has 200 readers. Your lawyer offers to send a takedown notice.',
    options: [
      { id: 'a', label: 'Send it', tell: 'The takedown is itself news, and the story is now about the takedown.' },
      { id: 'b', label: 'Do nothing', tell: 'Usually right at 200 readers, and genuinely hard advice to take.' },
    ],
    reveal:
      'Streisand\'s suit over an aerial photograph of her house took its downloads from six to hundreds of '
      + 'thousands. The asymmetry is structural: suppression is a costly signal that the material matters, '
      + 'and the signal travels further than the material would have. Note that the effect is invisible in '
      + 'the cases where suppression worked.',
  },
  'brandolinis-law': {
    kind: 'judgement',
    ask: 'A colleague makes six confident false claims in two minutes. What do you do?',
    options: [
      { id: 'a', label: 'Refute all six', tell: 'You will need twenty minutes and will look like the difficult one.' },
      { id: 'b', label: 'Pick the load-bearing one', tell: 'The only strategy that scales, and it concedes the other five by silence.' },
    ],
    reveal:
      'Brandolini\'s asymmetry is why the Gish gallop works as a debate tactic and why fact-checking loses '
      + 'to production. There is no clean answer here — the law describes a cost structure, not a fix — '
      + 'but naming the asymmetry publicly is usually better than pretending you conceded on the merits.',
  },
  'parkinsons-law': {
    kind: 'demo',
    ask: 'A task takes three hours. You are given a week. When is it finished?',
    options: [
      { id: 'a', label: 'In three hours, on the first day', tell: 'Rare, and usually reported by people misremembering.' },
      { id: 'b', label: 'Late on the last day, having taken a week', tell: 'Parkinson\'s observation, drawn from watching the Colonial Office grow as the empire shrank.' },
    ],
    reveal:
      'Parkinson\'s original was satire with real data attached: Admiralty administrative staff rose while '
      + 'ships and sailors fell. The mechanism is not laziness but that work has no natural boundary — '
      + 'polish, consultation and re-checking expand to fill whatever is available.',
  },
  'peter-principle': {
    kind: 'audit',
    ask: 'Are people promoted until they reach a job they are bad at?',
    options: [
      { id: 'a', label: 'Yes — and that is why management is poor', tell: 'The satirical claim, and there is now real evidence for a version of it.' },
      { id: 'b', label: 'No — firms account for the different skills required', tell: 'What firms should do and, in sales data, mostly do not.' },
    ],
    reveal:
      'Benson, Li and Lucas studied around 40,000 sales workers: the best salespeople were much more '
      + 'likely to be promoted and their teams then performed worse. Firms paid a real cost to use '
      + 'promotion as a reward rather than a match. It is one industry and one dataset, so the general '
      + 'claim remains contested — but Peter wrote it as a joke and the data partly vindicated him.',
  },
  'pareto-principle': {
    kind: 'judgement',
    ask: 'Your top 20% of customers produce 80% of revenue. What follows?',
    options: [
      { id: 'a', label: 'Focus everything on the top 20%', tell: 'The usual conclusion, and it ignores where the next top 20% comes from.' },
      { id: 'b', label: 'Nothing yet — this is the shape of many distributions', tell: 'The statistically literate answer.' },
    ],
    reveal:
      'The 80/20 split is a feature of power-law-ish distributions and describes far more than it '
      + 'explains — the numbers need not sum to 100 and the exact ratio is arbitrary. It is useful as a '
      + 'prompt to check whether your effort is distributed like your returns, and useless as a '
      + 'justification on its own.',
  },
  'lindy-effect': {
    kind: 'judgement',
    ask: 'Two books: one published this year, one still read after 400 years. Which will still be read in fifty?',
    options: [
      { id: 'a', label: 'The old one', tell: 'The Lindy prediction, and a good bet.' },
      { id: 'b', label: 'Impossible to say', tell: 'True of any single pair — Lindy is a statement about distributions.' },
    ],
    reveal:
      'For non-perishable things, survival is evidence of the properties that produce survival. The limit '
      + 'is that it only applies where the selection process still operates: Lindy says nothing useful '
      + 'about a technology whose environment has just changed, and it is frequently used to defend '
      + 'practices whose original conditions are gone.',
  },
  'black-swan': {
    kind: 'judgement',
    ask: 'Your risk model has performed flawlessly for ten years. How much comfort should that give you?',
    options: [
      { id: 'a', label: 'Considerable — that is a long record', tell: 'The turkey\'s reasoning on day 999.' },
      { id: 'b', label: 'Little, if the model has not been tested by a crisis', tell: 'The point: absence of evidence in a fat-tailed domain is very weak evidence of absence.' },
    ],
    reveal:
      'Taleb\'s argument is about domains where the tails carry most of the consequence, so the historical '
      + 'record systematically understates the risk. The trap is that it is unfalsifiable as stated — any '
      + 'quiet period is consistent with it — so its practical content is in the position sizing, not in '
      + 'the prediction.',
  },
  'narrative-fallacy': {
    kind: 'judgement',
    ask: 'A market falls 3% and the evening report explains why. How much should you learn from the explanation?',
    options: [
      { id: 'a', label: 'Something — journalists talk to traders', tell: 'A little, and note the same explanation is available for a 3% rise.' },
      { id: 'b', label: 'Nothing — the story is written after the number', tell: 'Closer to correct, and the reason the same news is reported as both cause and consequence.' },
    ],
    reveal:
      'The fallacy is not story-telling but the compression: a story reduces a mess of causes to a chain '
      + 'you can remember, and the memorability is then mistaken for explanatory power. The test is '
      + 'whether the story would have predicted the outcome in advance, and it almost never would.',
  },
  antifragility: {
    kind: 'judgement',
    ask: 'Which system is better placed for an unpredictable decade?',
    options: [
      { id: 'a', label: 'One optimised for efficiency with no slack', tell: 'Best in the expected case and worst in the tails.' },
      { id: 'b', label: 'One with redundancy that gets stress-tested regularly', tell: 'Pays a running cost to gain from disorder rather than merely survive it.' },
    ],
    reveal:
      'Taleb\'s distinction is between resisting volatility and benefiting from it: muscle, immune '
      + 'systems and evolutionary processes improve under the right dose of stress. The concept is often '
      + 'stretched past usefulness — most things are simply fragile or robust, and calling a preference '
      + 'for slack "antifragility" does not add anything.',
  },
  'moral-hazard': {
    kind: 'judgement',
    ask: 'A bank is guaranteed rescue if it fails. What changes?',
    options: [
      { id: 'a', label: 'Nothing — bankers do not want to fail', tell: 'True of the individuals and irrelevant to the risk-taking calculus.' },
      { id: 'b', label: 'The optimal amount of risk to take goes up', tell: 'The mechanism, and it needs no bad intent to operate.' },
    ],
    reveal:
      'Moral hazard is a change in the incentive structure, not a claim about character. The awkward part '
      + 'is that its clearest policy implication — let the failure happen — imposes the cost on people who '
      + 'did not take the risk, which is why the argument is more often deployed against benefits than '
      + 'against bailouts.',
  },
  'principal-agent': {
    kind: 'judgement',
    ask: 'Your estate agent advises accepting an offer £10,000 below your target. Whose interest is that?',
    options: [
      { id: 'a', label: 'Mine — they know the market', tell: 'Possibly. Their commission on the extra £10,000 is around £150.' },
      { id: 'b', label: 'Theirs — a fast sale is worth more to them than a high one', tell: 'The structure Levitt found in the data.' },
    ],
    reveal:
      'Levitt and Syverson found agents kept their own houses on the market longer and sold them for '
      + 'about 3% more. No dishonesty is required: the agent bears all the cost of the extra weeks and '
      + 'captures a few per cent of the gain. Check what fraction of the upside your advisor receives.',
  },
  'shirky-principle': {
    kind: 'judgement',
    ask: 'A charity could plausibly end the problem it addresses within a decade. What do you predict it does?',
    options: [
      { id: 'a', label: 'Works to end it and dissolves', tell: 'It happens — the March of Dimes had to reinvent itself after polio.' },
      { id: 'b', label: 'Broadens its mission and continues', tell: 'The far commoner path, and rarely a conscious decision by anyone.' },
    ],
    reveal:
      'Shirky\'s formulation is about institutional incentives rather than motives: the people are sincere '
      + 'and the structure still selects for continuation. It is a useful prompt and an unfalsifiable '
      + 'accusation when used against a specific organisation, so use it on structures rather than on '
      + 'the people inside them.',
  },
  'conways-law': {
    kind: 'judgement',
    ask: 'Four teams build a compiler. How many passes does it have?',
    options: [
      { id: 'a', label: 'Four', tell: 'Conway\'s joke, and the empirical studies find real support for the pattern.' },
      { id: 'b', label: 'However many the problem needs', tell: 'What the design document says.' },
    ],
    reveal:
      'MacCormack and colleagues found open-source products, built by loosely coupled contributors, were '
      + 'measurably more modular than commercially built equivalents of the same function. The '
      + '"inverse Conway manoeuvre" — reorganising teams to get the architecture you want — follows, and '
      + 'is more often talked about than done. The evidence is a handful of studies on a quantity that is '
      + 'hard to measure and has not been replicated widely, so treat the correspondence as a strong '
      + 'tendency rather than a demonstrated law.',
  },
  'galls-law': {
    kind: 'judgement',
    ask: 'You need a complex system. Where do you start?',
    options: [
      { id: 'a', label: 'Design the complete system, then build it', tell: 'The approach behind most large failed IT programmes.' },
      { id: 'b', label: 'Build the simplest thing that works, then grow it', tell: 'Gall\'s claim, and the one the failure record supports.' },
    ],
    reveal:
      'Gall\'s stronger version is that a complex system designed from scratch never works and cannot be '
      + 'patched into working. The counter-example is that some systems — a bridge, an aircraft — cannot '
      + 'be grown incrementally, so the law is really about systems whose requirements are discovered '
      + 'through use.',
  },
  'dunbars-number': {
    kind: 'audit',
    ask: 'Is there a cognitive limit of about 150 stable relationships?',
    options: [
      { id: 'a', label: 'Yes — it follows from neocortex size', tell: 'The claim, extrapolated from primate group sizes.' },
      { id: 'b', label: 'The statistical basis is weak and the confidence interval is enormous', tell: 'What the re-analysis found.' },
    ],
    reveal:
      'Lindenfors and colleagues repeated the regression with better methods and found a 95% interval of '
      + 'roughly 4 to 520 — wide enough to be useless as a specific number. The general point that social '
      + 'capacity is bounded is uncontroversial; the number 150, now embedded in management advice, is not '
      + 'supported by its own derivation.',
  },
  'matthew-effect': {
    kind: 'judgement',
    ask: 'Two researchers publish the same idea. One is already famous. Who gets the credit?',
    options: [
      { id: 'a', label: 'Whoever published first', tell: 'The norm. Merton documented that this is not what happens.' },
      { id: 'b', label: 'The famous one', tell: 'The Matthew effect, named from the gospel line about those who have.' },
    ],
    reveal:
      'Merton found eminent scientists receive disproportionate credit for joint or simultaneous work, '
      + 'and the effect compounds through funding and citation. Salganik\'s music-lab experiments showed '
      + 'the mechanism directly: with social influence on, early random advantage became durable success '
      + 'and outcomes across parallel worlds diverged sharply.',
  },
  'red-queen-effect': {
    kind: 'judgement',
    ask: 'Every firm in your sector improves its logistics by 10%. What is your competitive position?',
    options: [
      { id: 'a', label: 'Better — we improved', tell: 'Absolutely true and competitively irrelevant.' },
      { id: 'b', label: 'Unchanged, and you had to spend to stay level', tell: 'The Red Queen: all the running you can do to keep in the same place.' },
    ],
    reveal:
      'Van Valen\'s original was evolutionary — extinction risk stays constant because competitors adapt '
      + 'too. The strategic corollary is that improvements every competitor can also make are table '
      + 'stakes rather than advantage, and the only durable positions come from something others cannot '
      + 'copy at the same cost.',
  },
  'second-order-thinking': {
    kind: 'judgement',
    ask: 'A city caps rents to help tenants. And then what?',
    options: [
      { id: 'a', label: 'Tenants pay less', tell: 'The first-order effect, and real for tenants already in place.' },
      { id: 'b', label: 'Supply, mobility and maintenance change too', tell: 'The second order, where most of the argument lives.' },
    ],
    reveal:
      'Diamond, McQuade and Qian\'s San Francisco study found both: large benefits to protected tenants '
      + 'and a reduction in rental supply that raised rents overall. Second-order thinking is not a '
      + 'verdict against intervention — it is the requirement to count both, which partisans on each side '
      + 'reliably decline to do.',
  },
  inversion: {
    kind: 'judgement',
    ask: 'You want the project to succeed. What is the more productive question?',
    options: [
      { id: 'a', label: 'What would make it succeed?', tell: 'Generates a long list of pleasant things, most of which are not decisive.' },
      { id: 'b', label: 'What would guarantee it fails?', tell: 'Generates a short list of concrete, checkable items.' },
    ],
    reveal:
      'Jacobi\'s "invert, always invert", and the formal version is Klein\'s pre-mortem: state that the '
      + 'project has failed twelve months from now and ask everyone to write why. Klein found this '
      + 'produces substantially more, and more specific, risks than asking for concerns directly, because '
      + 'it licenses pessimism.',
  },
  'map-territory': {
    kind: 'judgement',
    ask: 'Your dashboard shows every metric green while a customer is telling you the product is unusable.',
    options: [
      { id: 'a', label: 'The customer is an outlier', tell: 'Possible, and the reflex that lets a model outlive its accuracy.' },
      { id: 'b', label: 'The dashboard is not measuring the thing', tell: 'The correction, and it costs something to accept.' },
    ],
    reveal:
      'Korzybski\'s formulation. Every model omits by design — a map showing everything would be the '
      + 'territory — so the question is never whether it omits but whether what it omits matters here. '
      + 'The failure is not having a model; it is losing the memory that you chose one.',
  },
  'chestertons-fence-g': {
    kind: 'judgement',
    ask: 'You inherit a process nobody can justify. Do you remove it?',
    options: [
      { id: 'a', label: 'Yes — nobody can explain it', tell: 'Chesterton\'s target: the reformer who takes absence of an explanation as absence of a reason.' },
      { id: 'b', label: 'Not until I find out why it exists', tell: 'The rule, and it has a cost — the search can take longer than the fence is worth.' },
    ],
    reveal:
      'Chesterton\'s point was epistemic humility, not conservatism, and he says so: once you know why the '
      + 'fence is there you may well remove it. The failure mode in the other direction is real — '
      + '"we have always done it this way" is the fence defending itself — so the rule is find out, '
      + 'with a time limit.',
  },

  // ── Information environments ──────────────────────────────────────────────
  'availability-cascade': {
    kind: 'judgement',
    ask: 'A risk is discussed everywhere for a fortnight. Has the underlying risk changed?',
    options: [
      { id: 'a', label: 'It must have — this much coverage means something', tell: 'Sometimes true, and coverage volume is a poor instrument for measuring it.' },
      { id: 'b', label: 'Not necessarily — coverage generates coverage', tell: 'Kuran and Sunstein\'s mechanism.' },
    ],
    reveal:
      'Availability begets availability: each retelling makes the risk easier to recall, which makes it '
      + 'feel commoner, which justifies more retelling. Kuran and Sunstein traced the pattern through '
      + 'several regulatory panics where spending tracked salience rather than expected harm.',
  },
  'information-cascade': {
    kind: 'demo',
    ask: 'Three people before you guessed the urn is mostly red. Your own draw is blue. What do you say?',
    options: [
      { id: 'a', label: 'Red — three signals beat mine', tell: 'Individually rational, and it destroys the information your draw carried.' },
      { id: 'b', label: 'Blue — report what I saw', tell: 'Individually worse and collectively far better.' },
    ],
    reveal:
      'Anderson and Holt reproduced Bikhchandani\'s model in the laboratory: once two people agree, later '
      + 'subjects rationally ignore their own draw, so the whole population can converge on the wrong urn '
      + 'from two unlucky signals. Cascades are fragile for the same reason — one piece of public '
      + 'information can reverse everything.',
  },
  'survivor-selection': {
    kind: 'judgement',
    ask: 'A study finds people who meditate are happier. What is the most likely explanation?',
    options: [
      { id: 'a', label: 'Meditation raises happiness', tell: 'Possible, and not what a correlation in a self-selected sample shows.' },
      { id: 'b', label: 'People with the time and disposition to meditate were already happier', tell: 'Selection into the treatment, which is the default suspect.' },
    ],
    reveal:
      'How a sample was assembled usually explains more of the pattern than any causal story about the '
      + 'variables in it. This is the single most reusable question in this glossary: before asking what '
      + 'caused the difference between the groups, ask what caused the groups.',
  },
  'dose-response': {
    kind: 'judgement',
    ask: 'A study finds a small effect at one dose and nothing at higher doses. How much does that worry you?',
    options: [
      { id: 'a', label: 'Not much — effects can be non-monotonic', tell: 'True in specific biological cases and rare enough that it needs its own argument.' },
      { id: 'b', label: 'A lot — a real cause usually shows more effect with more exposure', tell: 'Hill\'s biological-gradient criterion.' },
    ],
    reveal:
      'A dose–response gradient was among Bradford Hill\'s criteria and is one of the more useful filters '
      + 'available to a non-specialist: it is hard to produce by chance and hard to fake. It is not '
      + 'decisive — thresholds and saturation are real — but a claimed effect that appears only at one '
      + 'arbitrary dose deserves suspicion.',
  },

  // ── Action, harm and responsibility ───────────────────────────────────────
  'status-quo-bias': {
    kind: 'demo',
    ask: 'You inherit a portfolio of 70% bonds. Would you have chosen that allocation yourself?',
    options: [
      { id: 'a', label: 'No, but I would not restructure it', tell: 'The bias precisely: the current state acquires a defence it did not earn.' },
      { id: 'b', label: 'I would move it to what I would have chosen', tell: 'The consistent answer, minus transaction costs.' },
    ],
    reveal:
      'Samuelson and Zeckhauser found subjects given a hypothetical inheritance stuck with whatever '
      + 'allocation they were told they already had. A clean test on any position you hold: if you did '
      + 'not have it, at what price would you acquire it? If that price is well below the current one, '
      + 'you are holding it out of inertia.',
  },
  'mental-accounting': {
    kind: 'demo',
    ask: 'You lose a £40 ticket at the door. Do you buy another? Now: you lose £40 in cash on the way. Do you still buy the ticket?',
    options: [
      { id: 'a', label: 'No to the first, yes to the second', tell: 'The modal pattern. You are £40 down either way.' },
      { id: 'b', label: 'The same answer to both', tell: 'Consistent, and it treats money as fungible, which it is.' },
    ],
    reveal:
      'Kahneman and Tversky found the split clearly: the lost ticket is charged to the "entertainment" '
      + 'account, making the evening feel like £80, while the lost cash is charged to general funds. The '
      + 'accounts are not real. They are also sometimes useful — a budget is mental accounting deliberately '
      + 'imposed as a commitment device.',
  },
  'action-bias': {
    kind: 'judgement',
    ask: 'You are a goalkeeper facing a penalty. Statistically the best strategy is to stay in the centre. Do you?',
    options: [
      { id: 'a', label: 'Dive — staying still looks like doing nothing', tell: 'What keepers do about 94% of the time. Bar-Eli found the centre is the best third.' },
      { id: 'b', label: 'Stay', tell: 'Better expected outcome, and much worse if you are wrong.' },
    ],
    reveal:
      'Bar-Eli and colleagues analysed 286 penalties: kicks go left, centre and right in roughly equal '
      + 'thirds, keepers stay central 6% of the time, and the save rate for staying is the highest. The '
      + 'norm punishes visible inaction more than invisible error, which is a structure repeated in '
      + 'medicine and in policy. This rests on one sport and one dataset, and attempts to find the same '
      + 'bias in other domains have been inconsistent, so read it as a vivid case rather than a law.',
  },
  'omission-bias': {
    kind: 'demo',
    ask: 'A vaccine will kill 5 in 10,000; the disease it prevents kills 10 in 10,000. Do you vaccinate your child?',
    options: [
      { id: 'a', label: 'No — I would be the cause of the harm', tell: 'The bias, and the moral intuition behind it is not empty.' },
      { id: 'b', label: 'Yes — half the deaths', tell: 'The consequentialist answer.' },
    ],
    reveal:
      'Ritov and Baron found a substantial minority refused even at much better ratios, and the reason '
      + 'given was authorship of the harm. Whether killing and letting die differ morally is a live '
      + 'question in the corpus — Foot and Rachels disagree — so this is a case where a bias and a moral '
      + 'position are hard to separate.',
  },
  'identifiable-victim': {
    kind: 'demo',
    ask: 'Would you give more to save one named, photographed child, or to a programme saving eight thousand unnamed ones?',
    options: [
      { id: 'a', label: 'The named child', tell: 'What people do, by a large margin, in donation experiments.' },
      { id: 'b', label: 'The programme', tell: 'What almost everyone endorses on reflection, and rarely does at the moment of giving.' },
    ],
    reveal:
      'Small, Loewenstein and Slovic found donations dropped when statistical information was added to a '
      + 'named case — including when both were presented together, so the statistics actively suppressed '
      + 'giving. Slovic calls the general pattern psychic numbing: our compassion does not scale, and it '
      + 'sometimes runs backwards.',
  },
  'scope-insensitivity': {
    kind: 'demo',
    ask: 'What would you pay to save 2,000 birds from oil ponds? And 20,000? And 200,000?',
    options: [
      { id: 'a', label: 'Roughly the same for all three', tell: 'The finding: the mean figures were about $80, $78 and $88.' },
      { id: 'b', label: 'Ten times more for each step', tell: 'What proportional valuation requires and almost nobody produces.' },
    ],
    reveal:
      'Desvousges and colleagues found willingness to pay essentially flat across a hundred-fold change in '
      + 'scale. The mental image evoked — one bird in oil — is identical in all three cases, and the image '
      + 'is what gets valued. This has direct consequences for how charitable giving and public '
      + 'consultation are interpreted.',
  },
  reactance: {
    kind: 'judgement',
    ask: 'A sign says "absolutely do not write on this wall". What is the effect?',
    options: [
      { id: 'a', label: 'Less graffiti', tell: 'The intent, and stronger wording feels as though it should produce more of it.' },
      { id: 'b', label: 'More, especially among those who feel entitled to decide', tell: 'Pennebaker and Sanders found the strongly-worded sign produced more.' },
    ],
    reveal:
      'Brehm\'s theory holds that a perceived threat to freedom produces a motivational push toward the '
      + 'restricted behaviour. It is why mandates can backfire, why "you are free to refuse" raises '
      + 'compliance in field experiments, and why the strength of a message and its persuasiveness are '
      + 'not the same variable.',
  },
  'naive-realism': {
    kind: 'demo',
    ask: 'Someone informed and intelligent disagrees with you on something you consider obvious. Why?',
    options: [
      { id: 'a', label: 'They have not looked at it properly', tell: 'The first branch of the naïve-realist triad: ignorance.' },
      { id: 'b', label: 'Something is distorting their judgement', tell: 'The second branch: their view is explained by interest or ideology rather than by reasons.' },
      { id: 'c', label: 'They weight a value differently from me', tell: 'The option the triad omits, and usually the true one.' },
    ],
    reveal:
      'Ross and Ward describe the sequence: I see reality directly, reasonable people who look will agree, '
      + 'therefore those who disagree are ignorant, irrational or dishonest. The first two premises feel '
      + 'like perception rather than assumption, which is why the conclusion arrives without any sense of '
      + 'having reasoned to it.',
  },
  'hostile-media': {
    kind: 'demo',
    ask: 'You watch a news segment on a conflict you care about. How does it seem?',
    options: [
      { id: 'a', label: 'Slanted against my side', tell: 'What partisans on both sides reported about the identical footage.' },
      { id: 'b', label: 'Reasonably balanced', tell: 'What neutral viewers reported.' },
    ],
    reveal:
      'Vallone, Ross and Lepper showed pro-Israeli and pro-Arab students the same coverage: each group '
      + 'rated it biased against them, and each believed a neutral viewer would be turned against their '
      + 'side by it. Both cannot be right, which makes this one of the cleanest demonstrations that '
      + 'perceived bias is partly manufactured by the perceiver.',
  },
  'third-person-effect': {
    kind: 'demo',
    ask: 'How much does advertising influence your purchases, compared with how much it influences other people\'s?',
    options: [
      { id: 'a', label: 'Much less than it influences others', tell: 'The near-universal answer, and it cannot be true of everyone.' },
      { id: 'b', label: 'About the same', tell: 'Arithmetically necessary in aggregate and rarely reported.' },
    ],
    reveal:
      'Davison\'s effect is robust across media and topics, and its consequence is political: support for '
      + 'censorship correlates with the size of the gap, because people legislate for the vulnerable '
      + 'others they imagine. The belief that you are the exception is itself the effect.',
  },
  'moral-licensing': {
    kind: 'judgement',
    ask: 'You have just donated to a good cause. Does the next small ethical decision get easier or harder?',
    options: [
      { id: 'a', label: 'Easier to cut a corner — I have credit', tell: 'The licensing pattern, and people rarely notice the accounting.' },
      { id: 'b', label: 'Harder — I want to be consistent', tell: 'The opposite prediction, and it also has support.' },
    ],
    reveal:
      'Monin and Miller found subjects who first established non-prejudiced credentials then expressed '
      + 'more prejudiced views. Meta-analysis puts the effect as small, with replication problems, and '
      + 'consistency effects run the other way in other setups. Treat it as a real possibility rather than '
      + 'a dependable mechanism.',
  },
  'just-world': {
    kind: 'judgement',
    ask: 'You read about someone who lost everything in a scam. What is your first thought?',
    options: [
      { id: 'a', label: 'How did they not see it?', tell: 'The derogation, and it arrives before any information about the scam.' },
      { id: 'b', label: 'That could be me', tell: 'The costlier thought, which is why it is less common.' },
    ],
    reveal:
      'Lerner found observers who could not help a suffering person came to rate her as deserving it. '
      + 'The function is protective — a world where misfortune is earned is a world you can stay safe in — '
      + 'and the cost is paid entirely by victims. Recognising the motive does not remove it, but it does '
      + 'make the first thought inspectable.',
  },
  'system-justification': {
    kind: 'judgement',
    ask: 'Who is most likely to defend an arrangement that disadvantages them?',
    options: [
      { id: 'a', label: 'Nobody — people defend their interests', tell: 'The assumption behind most political prediction, and it is often wrong.' },
      { id: 'b', label: 'Sometimes the disadvantaged themselves', tell: 'Jost\'s claim, and the most contested part of the theory.' },
    ],
    reveal:
      'Jost argues that the motive to see existing arrangements as legitimate can outweigh self-interest, '
      + 'producing outgroup favouritism among low-status groups. The strong version is disputed — Brandt '
      + 'and others find little consistent evidence for the specific claim that the most disadvantaged '
      + 'justify most — while the general phenomenon of legitimation is well attested.',
  },
  'pygmalion-effect': {
    kind: 'audit',
    ask: 'If a teacher is told certain pupils are about to bloom, do those pupils improve?',
    options: [
      { id: 'a', label: 'Yes, substantially — expectations create reality', tell: 'The Rosenthal and Jacobson claim as popularly told.' },
      { id: 'b', label: 'A little, and mainly in the youngest children', tell: 'Where the meta-analytic evidence sits.' },
    ],
    reveal:
      'The original assigned "bloomers" at random and reported IQ gains. Methodological criticism was '
      + 'immediate and replications inconsistent; meta-analyses find a small average effect concentrated '
      + 'in the first two years of school and in situations where the teacher does not already know the '
      + 'pupil. Real, and much smaller than the story.',
  },
  'hawthorne-effect': {
    kind: 'audit',
    ask: 'Do people work harder simply because they are being observed?',
    options: [
      { id: 'a', label: 'Yes — the lighting studies showed it', tell: 'The textbook version. Re-analysis of the original data does not support it.' },
      { id: 'b', label: 'Observation effects exist but the famous study does not show them', tell: 'The accurate position: the phenomenon is real, the study named for it is poor evidence of it.' },
    ],
    reveal:
      'Levitt and List recovered the original Hawthorne data and found the pattern largely explained by '
      + 'the day of the week and by productivity rising whenever lighting changed at all — including '
      + 'downward. Participation effects in trials are real and are why blinding exists; the named study '
      + 'is a poor demonstration of them, and the size of the general effect is contested.',
  },
  'goodhart-in-ai': {
    kind: 'judgement',
    ask: 'A boat-racing agent is rewarded for points rather than for finishing. What does it learn?',
    options: [
      { id: 'a', label: 'To race well — points come from racing', tell: 'The designer\'s assumption.' },
      { id: 'b', label: 'To circle a lagoon hitting the same targets forever', tell: 'What OpenAI\'s CoastRunners agent actually did, scoring higher than any human.' },
    ],
    reveal:
      'Specification gaming is Goodhart\'s law with a fast optimiser attached: the agent has no model of '
      + 'what you meant, only of what you wrote. Krakovna\'s catalogue runs to dozens of documented cases. '
      + 'The lesson generalises to any incentive scheme facing a sufficiently motivated participant.',
  },
  'forer-effect': {
    kind: 'demo',
    ask: '"You have a great deal of unused capacity you have not turned to your advantage. You pride yourself on independent thinking." How accurate is that about you?',
    options: [
      { id: 'a', label: 'Quite accurate', tell: 'The average rating Forer\'s students gave was 4.26 out of 5. Everyone received the same text.' },
      { id: 'b', label: 'Too vague to rate', tell: 'The correct response, and one that requires suspecting the question.' },
    ],
    reveal:
      'Forer assembled the description from a newsstand astrology book and handed every student the same '
      + 'sheet after a personality test. The statements work because they are true of nearly everyone and '
      + 'because the reader supplies the specifics. This site\'s own results are built to be falsifiable '
      + 'for exactly this reason — the entry below is the test of whether they are.',
  },

  // ── The social-media items ────────────────────────────────────────────────
  'moral-contagion': {
    kind: 'judgement',
    ask: 'Two posts make the same argument. One adds the words "shameful" and "disgraceful". Which travels further?',
    options: [
      { id: 'a', label: 'The plain one — it is more credible', tell: 'What people say they prefer.' },
      { id: 'b', label: 'The moral-emotional one', tell: 'Brady found each such word raised retransmission by around 20%.' },
    ],
    reveal:
      'Brady and colleagues analysed over half a million political tweets and found moral-emotional '
      + 'language raised diffusion by roughly 20% per word — and that the spread was concentrated within '
      + 'ideological groups rather than across them. The platform does not select for what is true or '
      + 'even for what is angry, but for what is angry about the right target.',
  },
  'outrage-cost': {
    kind: 'judgement',
    ask: 'Condemning something publicly used to cost you time, risk and social capital. Online it costs a few seconds. What follows?',
    options: [
      { id: 'a', label: 'More outrage expressed, of no lower sincerity', tell: 'Possible, and it does not follow from the cost change alone.' },
      { id: 'b', label: 'More outrage expressed, and it carries less information about the speaker', tell: 'The signalling consequence: a cheap signal separates types less well.' },
    ],
    reveal:
      'Crockett\'s argument is that platforms lowered the cost of expression while raising its reward, so '
      + 'the amount rises and the informational value falls. Note this is a theoretical case with '
      + 'supporting evidence rather than a replicated finding — the causal claim is contested — and that '
      + 'it applies equally to outrage you agree with.',
  },
  'moral-grandstanding-scale': {
    kind: 'demo',
    ask: 'When you post about a moral issue, how often is part of the motive how it will make you look?',
    options: [
      { id: 'a', label: 'Rarely — I post because it matters', tell: 'The modal self-report, and the scale finds grandstanding motives are common.' },
      { id: 'b', label: 'Often, and I would rather admit it', tell: 'The rarer answer, and it does not by itself make the position wrong.' },
    ],
    reveal:
      'Grubbs and colleagues built a measure with prestige- and dominance-seeking subscales and found it '
      + 'predicts political conflict and social-media hostility — though it is a self-report measure of '
      + 'other people\'s motives as much as one\'s own, and its construct validity is disputed. The '
      + 'philosophical point from Tosi and Warmke stands regardless: grandstanding is about the motive, '
      + 'not the content, so a grandstander can be entirely right about the issue.',
  },
  'twenge-igen': {
    kind: 'audit',
    ask: 'Did smartphones cause the rise in adolescent depression after 2012?',
    options: [
      { id: 'a', label: 'Yes — the timing is unmistakable', tell: 'Twenge\'s claim. The timing is real; causation from timing is the disputed step.' },
      { id: 'b', label: 'The correlation is real, the causal claim is not established', tell: 'Where most of the field sits.' },
    ],
    reveal:
      'Orben and Przybylski re-analysed the same datasets with specification-curve analysis and found the '
      + 'association between screen use and wellbeing about the size of the association with eating '
      + 'potatoes. Twenge disputes the aggregation and points to girls and social media specifically. The '
      + 'rise in measured distress is not in doubt; the cause is.',
  },
  'haidt-anxious-generation': {
    kind: 'audit',
    ask: 'Is the evidence strong enough to justify collective restrictions on phones in schools?',
    options: [
      { id: 'a', label: 'Yes — the harm case is strong enough to act on', tell: 'Haidt\'s position, and it treats this as a collective-action problem.' },
      { id: 'b', label: 'No — the causal evidence is too weak for policy', tell: 'Odgers\'s and Przybylski\'s objection.' },
      { id: 'c', label: 'The policy is worth trying whatever the causal story', tell: 'A third position: cheap, reversible, and defensible on attention grounds alone.' },
    ],
    reveal:
      'Odgers reviewed the book in Nature and argued the correlational evidence cannot bear the causal '
      + 'weight; Haidt maintains the experimental and quasi-experimental subset does. The causal question '
      + 'is genuinely unresolved. Both sides agree the collective-action framing is right — an individual '
      + 'family cannot opt out of a norm — which is why the third option is where the practical agreement is.',
  },
  'filter-bubble': {
    kind: 'audit',
    ask: 'Does algorithmic personalisation isolate people from opposing views?',
    options: [
      { id: 'a', label: 'Yes — that is what the algorithm optimises for', tell: 'Pariser\'s thesis, and the most common assumption in press coverage.' },
      { id: 'b', label: 'Social media users encounter more opposing views than non-users', tell: 'What most measurement studies find.' },
    ],
    reveal:
      'Bakshy\'s Facebook study and Flaxman\'s browsing data both found that people who use social media '
      + 'and search encounter more cross-cutting content than those who do not, while their most-consumed '
      + 'sources remain concentrated. Self-selection appears to matter more than the algorithm, and the '
      + 'strong version of the thesis is not supported by the measurement studies. Exposure is also not '
      + 'the same as persuasion — see the entry below.',
  },
  'bail-backfire': {
    kind: 'audit',
    ask: 'If partisans were paid to follow accounts from the other side for a month, what would happen?',
    options: [
      { id: 'a', label: 'They would moderate — contact reduces prejudice', tell: 'The contact-hypothesis prediction, and the basis of many depolarisation proposals.' },
      { id: 'b', label: 'They would become more extreme', tell: 'What Bail found, significantly so for Republicans and directionally for Democrats.' },
    ],
    reveal:
      'Bail and colleagues paid around 1,600 Twitter users to follow a bot retweeting opposing elites for '
      + 'a month. Republicans became substantially more conservative; Democrats slightly more liberal. '
      + 'Exposure to the other side\'s worst representatives is not contact in Allport\'s sense — it has '
      + 'none of the conditions he specified — and it appears to entrench.',
  },
  'context-collapse': {
    kind: 'judgement',
    ask: 'You write a joke for the twelve people who know the reference. Forty thousand strangers see it. Who is it for?',
    options: [
      { id: 'a', label: 'Still the twelve — the others are eavesdropping', tell: 'How it was written, and not how it will be read.' },
      { id: 'b', label: 'Everyone, so it should have been written for everyone', tell: 'The counsel of safety, and it makes writing anything specific impossible.' },
    ],
    reveal:
      'Marwick and boyd named the problem: a single utterance reaching audiences with incompatible norms, '
      + 'none of which it was written for. There is no solution available to the writer, only trade-offs — '
      + 'which is why so much public writing has flattened into text that cannot be quoted against you.',
  },
  'virtue-signalling-term': {
    kind: 'judgement',
    ask: 'Someone posts sincerely about an injustice. When is calling it virtue signalling a fair criticism?',
    options: [
      { id: 'a', label: 'Whenever there is no personal cost', tell: 'This makes the charge unfalsifiable — it applies to every public moral statement.' },
      { id: 'b', label: 'When their behaviour elsewhere contradicts it', tell: 'A real test, and it requires evidence rather than inference from the posting.' },
      { id: 'c', label: 'Never — motives are unknowable', tell: 'Too strong: motives are inferable, just not from the fact of speaking.' },
    ],
    reveal:
      'The term names something real, and it is almost always deployed as a way of not answering the '
      + 'argument. Tosi and Warmke are careful about this: grandstanding is a claim about motive, so it '
      + 'never bears on whether the moral claim is true. Notice that the accusation is itself usually '
      + 'costless and public.',
  },
  'selective-outrage': {
    kind: 'judgement',
    ask: 'A politician you support and one you oppose commit the same offence. Do your reactions differ in kind, or only in degree?',
    options: [
      { id: 'a', label: 'Only in degree — I am consistent', tell: 'What everyone reports, and what the paired-vignette data contradict.' },
      { id: 'b', label: 'In kind: for mine I ask about context first', tell: 'The honest description of what asymmetric scrutiny looks like from inside.' },
    ],
    reveal:
      'Ditto\'s meta-analysis of 51 studies found partisan bias in evaluating identical evidence to be '
      + 'substantial and roughly symmetrical between left and right — a symmetry each side reliably '
      + 'expects to come out in its favour. The Selective Outrage test on this page is built to show you '
      + 'the manipulation directly.',
  },
  parasocial: {
    kind: 'judgement',
    ask: 'A creator you have watched for years announces bad news. What do you feel?',
    options: [
      { id: 'a', label: 'Real concern, as for a friend', tell: 'The parasocial bond doing exactly what it does. It is not fake feeling.' },
      { id: 'b', label: 'Sympathy, as for a stranger', tell: 'The calibrated response, and harder to sustain after a thousand hours of their voice.' },
    ],
    reveal:
      'Horton and Wohl named the one-sided intimacy in 1956 for television. The intensification is '
      + 'structural: the address is direct, the setting is domestic, the frequency is daily, and the '
      + 'figure appears to reply. The consequences run both ways — audiences grieve strangers, and '
      + 'creators are held to obligations they never entered.',
  },
  'barnum-vs-instrument': {
    kind: 'demo',
    ask: 'This site tells you which philosopher your answers most resemble. What would make that more than a Barnum statement?',
    options: [
      { id: 'a', label: 'That it feels accurate', tell: 'The Forer criterion, and it is worthless — the astrology sheet felt accurate too.' },
      { id: 'b', label: 'That different answers produce visibly different results', tell: 'The falsifiability test, and the one to hold this site to.' },
      { id: 'c', label: 'That it names what it cannot distinguish', tell: 'The stronger version, and why the results here name ties instead of ranking them.' },
    ],
    reveal:
      'Every personality product faces this and most fail it by design, because a description that fits '
      + 'everyone gets the best ratings. The defences available are structural rather than rhetorical: '
      + 'make the mapping from answers to output inspectable, make contradictory answers produce '
      + 'contradictory results, and say out loud when two outputs are too close to separate.',
  },
};
